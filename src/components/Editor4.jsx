import React from 'react';

export default function Editor4({
    formData,
    handleChange,
    addListItem,
    removeListItem,
    updateListItem
}) {
    return (
        <div className="editor-form-content">
            {/* General Settings */}
            <div className="form-section">
                <h3>General Settings</h3>
                <h4 style={{ fontSize: '11px', textTransform: 'uppercase', color: '#666', margin: '15px 0 10px' }}>Dark Mode Theme</h4>
                <div className="input-field">
                    <label>Accent Color (Dark Mode)</label>
                    <input type="color" name="accentColorDark" value={formData.accentColorDark || '#64ffda'} onChange={handleChange} style={{ height: '50px', padding: '5px' }} />
                </div>
                <div className="input-field">
                    <label>Background Color (Dark Mode)</label>
                    <input type="color" name="backgroundColorDark" value={formData.backgroundColorDark || '#0a192f'} onChange={handleChange} style={{ height: '50px', padding: '5px' }} />
                </div>

                <h4 style={{ fontSize: '11px', textTransform: 'uppercase', color: '#666', margin: '25px 0 10px' }}>Light Mode Theme</h4>
                <div className="input-field">
                    <label>Accent Color (Light Mode)</label>
                    <input type="color" name="accentColorLight" value={formData.accentColorLight || '#b4860b'} onChange={handleChange} style={{ height: '50px', padding: '5px' }} />
                </div>
                <div className="input-field">
                    <label>Background Color (Light Mode)</label>
                    <input type="color" name="backgroundColorLight" value={formData.backgroundColorLight || '#fffbf2'} onChange={handleChange} style={{ height: '50px', padding: '5px' }} />
                </div>
            </div>

            {/* Personal Info */}
            <div className="form-section">
                <h3>Personal Info</h3>
                <div className="input-field">
                    <label>Full Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" />
                </div>
                <div className="input-field">
                    <label>Contact Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email@example.com" />
                </div>
                <div className="input-field">
                    <label>Professional Role</label>
                    <input type="text" name="role" value={formData.role} onChange={handleChange} placeholder="Full Stack Developer" />
                </div>
                <div className="input-field">
                    <label>Tagline / Bio</label>
                    <textarea name="bio" value={formData.bio} onChange={handleChange} placeholder="Building ideas with code..." rows="3" />
                </div>
                <div className="input-field">
                    <label>Profile Image URL</label>
                    <input type="text" name="heroImage" value={formData.heroImage || ''} onChange={handleChange} placeholder="https://example.com/avatar.jpg" />
                </div>
                <div className="input-field">
                    <label>Resume PDF Link (URL)</label>
                    <input type="text" name="resumeLink" value={formData.resumeLink} onChange={handleChange} placeholder="Paste your Google Drive or PDF link here" />
                    <small style={{ display: 'block', marginTop: '5px', color: '#888', fontSize: '11px' }}>Important: Make sure the link is public!</small>
                </div>
            </div>

            {/* Social Links */}
            <div className="form-section">
                <h3>Social Links</h3>
                <div className="input-field">
                    <label>LinkedIn URL</label>
                    <input type="text" name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="https://linkedin.com/in/username" />
                </div>
                <div className="input-field">
                    <label>GitHub URL</label>
                    <input type="text" name="github" value={formData.github} onChange={handleChange} placeholder="https://github.com/username" />
                </div>
            </div>

            {/* Skills */}
            <div className="form-section">
                <h3>Skills</h3>
                <div className="list-editor">
                    {formData.skills?.map((skill, index) => (
                        <div key={index} className="list-item-complex" style={{ background: '#fff', border: '1px solid #ddd', padding: '16px' }}>
                            <div className="input-field" style={{ marginBottom: '10px' }}>
                                <label>Skill Name</label>
                                <input
                                    type="text"
                                    value={typeof skill === 'string' ? skill : skill.name}
                                    onChange={(e) => updateListItem('skills', index, {
                                        name: e.target.value,
                                        level: typeof skill === 'string' ? 85 : skill.level
                                    })}
                                    placeholder="React"
                                />
                            </div>
                            <button className="remove-btn-text" onClick={() => removeListItem('skills', index)}>Remove Skill</button>
                        </div>
                    ))}
                    <button className="add-btn" onClick={() => addListItem('skills', { name: '', level: 80 })}>+ Add Skill</button>
                </div>
            </div>

            {/* Projects */}
            <div className="form-section">
                <h3>Projects</h3>
                <div className="list-editor">
                    {formData.projects?.map((project, index) => (
                        <div key={index} className="list-item-complex" style={{ background: '#fff', border: '1px solid #ddd', padding: '16px' }}>
                            <div className="input-field" style={{ marginBottom: '12px' }}>
                                <label>Project Title</label>
                                <input
                                    type="text"
                                    value={project.title}
                                    onChange={(e) => updateListItem('projects', index, { ...project, title: e.target.value })}
                                    placeholder="Project Title"
                                />
                            </div>
                            <div className="input-field" style={{ marginBottom: '12px' }}>
                                <label>Short Description</label>
                                <textarea
                                    value={project.desc}
                                    onChange={(e) => updateListItem('projects', index, { ...project, desc: e.target.value })}
                                    placeholder="Short Description"
                                    rows="2"
                                />
                            </div>
                            <div className="input-field" style={{ marginBottom: '12px' }}>
                                <label>Tech Stack</label>
                                <input
                                    type="text"
                                    value={project.tech}
                                    onChange={(e) => updateListItem('projects', index, { ...project, tech: e.target.value })}
                                    placeholder="Tech Stack (e.g. React • CSS)"
                                />
                            </div>
                            <div className="input-field" style={{ marginBottom: '12px' }}>
                                <label>Problem Statement (Optional)</label>
                                <textarea
                                    value={project.problemStatement || ''}
                                    onChange={(e) => updateListItem('projects', index, { ...project, problemStatement: e.target.value })}
                                    placeholder="Describe the problem this project solves..."
                                    rows="2"
                                />
                            </div>
                            <div className="input-field" style={{ marginBottom: '12px' }}>
                                <label>Solution (Optional)</label>
                                <textarea
                                    value={project.solution || ''}
                                    onChange={(e) => updateListItem('projects', index, { ...project, solution: e.target.value })}
                                    placeholder="Describe your solution..."
                                    rows="2"
                                />
                            </div>
                            <button className="remove-btn-text" onClick={() => removeListItem('projects', index)}>Remove Project</button>
                        </div>
                    ))}
                    <button className="add-btn" onClick={() => addListItem('projects', { title: '', desc: '', tech: '', problemStatement: '', solution: '' })}>+ Add Project</button>
                </div>
            </div>

            {/* Experience */}
            <div className="form-section">
                <h3>Experience</h3>
                <div className="list-editor">
                    {formData.experience?.map((exp, index) => (
                        <div key={index} className="list-item-complex" style={{ background: '#fff', border: '1px solid #ddd', padding: '16px' }}>
                            <div className="input-field" style={{ marginBottom: '12px' }}>
                                <label>Job Title</label>
                                <input
                                    type="text"
                                    value={exp.title}
                                    onChange={(e) => updateListItem('experience', index, { ...exp, title: e.target.value })}
                                    placeholder="Job Title"
                                />
                            </div>
                            <div className="input-field" style={{ marginBottom: '12px' }}>
                                <label>Company / Organization</label>
                                <input
                                    type="text"
                                    value={exp.org}
                                    onChange={(e) => updateListItem('experience', index, { ...exp, org: e.target.value })}
                                    placeholder="Company / Organization"
                                />
                            </div>
                            <div className="input-field" style={{ marginBottom: '12px' }}>
                                <label>Time Period</label>
                                <input
                                    type="text"
                                    value={exp.time}
                                    onChange={(e) => updateListItem('experience', index, { ...exp, time: e.target.value })}
                                    placeholder="Time Period (e.g. 2024 - Present)"
                                />
                            </div>
                            <div className="input-field" style={{ marginBottom: '12px' }}>
                                <label>Description</label>
                                <textarea
                                    value={exp.desc}
                                    onChange={(e) => updateListItem('experience', index, { ...exp, desc: e.target.value })}
                                    placeholder="Description"
                                    rows="2"
                                />
                            </div>
                            <button className="remove-btn-text" onClick={() => removeListItem('experience', index)}>Remove Experience</button>
                        </div>
                    ))}
                    <button className="add-btn" onClick={() => addListItem('experience', { title: '', org: '', time: '', desc: '' })}>+ Add Experience</button>
                </div>
            </div>

            {/* Certifications */}
            <div className="form-section">
                <h3>Certifications</h3>
                <div className="list-editor">
                    {formData.certifications?.map((cert, index) => (
                        <div key={index} className="list-item-complex" style={{ background: '#fff', border: '1px solid #ddd', padding: '16px' }}>
                            <div className="input-field" style={{ marginBottom: '12px' }}>
                                <label>Certification Name</label>
                                <input
                                    type="text"
                                    value={cert.title}
                                    onChange={(e) => updateListItem('certifications', index, { ...cert, title: e.target.value })}
                                    placeholder="Certification Name"
                                />
                            </div>
                            <div className="input-field" style={{ marginBottom: '12px' }}>
                                <label>Issuer</label>
                                <input
                                    type="text"
                                    value={cert.issuer}
                                    onChange={(e) => updateListItem('certifications', index, { ...cert, issuer: e.target.value })}
                                    placeholder="Issuer (e.g. AWS, Meta, Google)"
                                />
                            </div>
                            <button className="remove-btn-text" onClick={() => removeListItem('certifications', index)}>Remove Certification</button>
                        </div>
                    ))}
                    <button className="add-btn" onClick={() => addListItem('certifications', { title: '', issuer: '' })}>+ Add Certification</button>
                </div>
            </div>

            {/* Hero Stats */}
            <div className="form-section">
                <h3>Hero Stats</h3>
                <div className="list-editor">
                    {formData.stats?.map((stat, index) => (
                        <div key={index} className="list-item-complex" style={{ background: '#fff', border: '1px solid #ddd', padding: '16px' }}>
                            <div className="input-field" style={{ marginBottom: '12px' }}>
                                <label>Stat Value</label>
                                <input
                                    type="text"
                                    value={stat.value}
                                    onChange={(e) => updateListItem('stats', index, { ...stat, value: e.target.value })}
                                    placeholder="10+"
                                />
                            </div>
                            <div className="input-field" style={{ marginBottom: '12px' }}>
                                <label>Stat Label</label>
                                <input
                                    type="text"
                                    value={stat.label}
                                    onChange={(e) => updateListItem('stats', index, { ...stat, label: e.target.value })}
                                    placeholder="Projects Built"
                                />
                            </div>
                            <button className="remove-btn-text" onClick={() => removeListItem('stats', index)}>Remove Stat</button>
                        </div>
                    ))}
                    {formData.stats?.length < 3 && (
                        <button className="add-btn" onClick={() => addListItem('stats', { label: '', value: '' })}>+ Add Stat</button>
                    )}
                </div>
            </div>
        </div>
    );
}
