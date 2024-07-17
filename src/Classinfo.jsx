import React, { useState } from 'react';
import './Classinfo.css';

const ClassInfo = () => {
    const [videoUrl, setVideoUrl] = useState("https://www.youtube.com/embed/hP2o6CLT7mI?si=MqPQkfPR8v9rRrD0");
    const [expandedLesson, setExpandedLesson] = useState(null);

    const lessons = [
        { title: "1. Introduction", duration: "03:04", description: "Meet Steve. He’s one of the most accomplished comedians of all time, an acclaimed writer, actor, and musician. And now, he’s your instructor." },
        { title: "2. Getting Started in Comedy", duration: "12:30", description: "Learn how Steve started his comedy career and his advice for newcomers." },
        { title: "3. Gathering Material", duration: "18:45", description: "Find out how to gather and develop your comedic material." },
        { title: "4. Developing a Routine", duration: "25:15", description: "Understand the process of developing a successful comedy routine." },
        { title: "5. Performing on Stage", duration: "30:10", description: "Tips and tricks for performing on stage and engaging with your audience." },
        { title: "6. Creating Characters", duration: "14:20", description: "Explore how to create memorable and funny characters." },
        { title: "7. Improvisation Techniques", duration: "22:40", description: "Learn improvisation techniques to enhance your comedy." },
        { title: "8. Writing for Film & TV", duration: "27:50", description: "Tips for writing comedy scripts for film and television." },
        { title: "9. Overcoming Stage Fright", duration: "19:30", description: "Strategies to overcome stage fright and gain confidence." },
        { title: "10. Final Thoughts", duration: "15:00", description: "Steve shares his final thoughts and encouragement for aspiring comedians." }
    ];

    const toggleLesson = (index) => {
        setExpandedLesson(expandedLesson === index ? null : index);
    };

    return (
        <>
            <section id="class-info" className="class-info">
                <div className="classinfo-left">
                    <h2>About this Class</h2>
                    <div className="video-container">
                        <iframe 
                            className="video-iframe"
                            width="860" 
                            height="500" 
                            src={videoUrl} 
                            frameBorder="0" 
                            title="Steve Martin Teaches Comedy" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                <div className="classinfo-right">
                    <div className="buttons-container">
                        <button onClick={() => setVideoUrl("https://www.youtube.com/embed/hP2o6CLT7mI?si=MqPQkfPR8v9rRrD0")}>Class Trailer</button>
                        <button onClick={() => setVideoUrl("https://www.youtube.com/embed/FMvNoJvQqNw?si=OGgiTHJaoujfdP9S&amp;controls=0")}>Class Sample</button>
                    </div>
                    <div className="lesson-plan">
                        <h3 className='browse'>Browse Lesson Plan</h3>
                        <div className="lessons-container">
                            {lessons.map((lesson, index) => (
                                <div key={index} className={`lesson ${expandedLesson === index ? "expanded" : ""}`}>
                                    <div className="lesson-header" onClick={() => toggleLesson(index)}>
                                        <h3>{lesson.title}</h3>
                                        <span>{expandedLesson === index ? "▲" : "▼"}</span>
                                    </div>
                                    {expandedLesson === index && (
                                        <div className="lesson-details">
                                            <p>{lesson.duration}</p>
                                            <p>{lesson.description}</p>
                                            <p>Read More...</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <div className="class-info-footer">
                <p><strong>Instructor(s):</strong> <span className="instructor-name">Steve Martin</span></p>
                <p><strong>Class Length:</strong> 25 video lessons (4 hours 40 minutes)</p>
                <p><strong>Category:</strong> Acting & Performing Arts, Film & TV</p>
                <div className="topics-covered">
                    <span className="topic-badge">Polish Your Acting & Nail That Audition</span>
                    <span className="topic-badge">Bring Unforgettable Characters To Life</span>
                    <span className="topic-badge">Develop Comedy & Improv Skills</span>
                    <span className="topic-badge">Pitch & Write Stories For Film & TV</span>
                    <span className="topic-badge">Overcome Stage Fright & Gain Confidence</span>
                </div>
            </div>
        </>
    );
};

export default ClassInfo;
