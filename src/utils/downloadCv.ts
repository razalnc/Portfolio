import jsPDF from 'jspdf';

/**
 * Utility function to generate and download Razal NC's exact PDF Resume
 */
export function downloadCV() {
  try {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const pageWidth = 210;
    const pageHeight = 297;
    const marginX = 14;
    let y = 16;

    // Helper for adding section title
    const addSectionTitle = (title: string, startX: number, endX: number) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(0, 0, 0);
      doc.text(title, startX, y);
      y += 1.5;
      doc.setLineWidth(0.3);
      doc.setDrawColor(0, 0, 0);
      doc.line(startX, y, endX, y);
      y += 4.5;
    };

    // 1. HEADER - NAME & SUBTITLE
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(24);
    doc.setTextColor(0, 0, 0);
    doc.text('RAZAL NC', marginX, y);

    y += 6.5;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(29, 78, 216); // #1d4ed8 Blue
    doc.text('COMPUTER SCIENCE STUDENT', marginX, y);

    y += 4;
    doc.setLineWidth(0.4);
    doc.setDrawColor(203, 213, 225); // #cbd5e1 line
    doc.line(marginX, y, pageWidth - marginX, y);

    // TOP CONTACT BAR
    y += 4.5;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(51, 65, 85);
    
    const contactBarText = 'razalnc123@gmail.com     |     8089716424     |     Areekode, India 673639     |     linkedin.com/in/razalnc';
    doc.text(contactBarText, marginX, y);

    y += 3;
    doc.line(marginX, y, pageWidth - marginX, y);

    // TWO COLUMN LAYOUT CONFIG
    y += 6;
    const topColY = y;
    const leftColX = marginX;
    const leftColWidth = 54;
    const rightColX = leftColX + leftColWidth + 6; // 14 + 54 + 6 = 74
    const rightColEnd = pageWidth - marginX; // 196
    const rightColWidth = rightColEnd - rightColX; // 122

    // --- LEFT COLUMN CONTENT ---
    let leftY = topColY;

    // Contact Section
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(0, 0, 0);
    doc.text('CONTACT', leftColX, leftY);
    leftY += 1.5;
    doc.setLineWidth(0.3);
    doc.setDrawColor(0, 0, 0);
    doc.line(leftColX, leftY, leftColX + leftColWidth, leftY);
    leftY += 4.5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(51, 65, 85);
    doc.text('razalnc123@gmail.com', leftColX, leftY); leftY += 4.5;
    doc.text('8089716424', leftColX, leftY); leftY += 4.5;
    doc.text('Areekode, India 673639', leftColX, leftY); leftY += 4.5;
    doc.text('linkedin.com/in/razalnc', leftColX, leftY); leftY += 7;

    // Technical Skills
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(0, 0, 0);
    doc.text('TECHNICAL SKILLS', leftColX, leftY);
    leftY += 1.5;
    doc.line(leftColX, leftY, leftColX + leftColWidth, leftY);
    leftY += 4.5;

    const techSkills = [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Python',
      'Front-End Web Development',
      'Responsive Web Design',
      'Basic Artificial Intelligence',
      'Basic Machine Learning',
      'Graphic Design'
    ];

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(30, 41, 59);
    techSkills.forEach(skill => {
      doc.text(`•  ${skill}`, leftColX, leftY);
      leftY += 4.2;
    });
    leftY += 3;

    // Soft Skills
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(0, 0, 0);
    doc.text('SOFT SKILLS', leftColX, leftY);
    leftY += 1.5;
    doc.line(leftColX, leftY, leftColX + leftColWidth, leftY);
    leftY += 4.5;

    const softSkills = [
      'Problem Solving',
      'Time Management',
      'Team Collaboration',
      'Creativity',
      'Communication',
      'Attention to Detail',
      'Adaptability'
    ];

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(30, 41, 59);
    softSkills.forEach(skill => {
      doc.text(`•  ${skill}`, leftColX, leftY);
      leftY += 4.2;
    });
    leftY += 3;

    // Languages
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(0, 0, 0);
    doc.text('LANGUAGES', leftColX, leftY);
    leftY += 1.5;
    doc.line(leftColX, leftY, leftColX + leftColWidth, leftY);
    leftY += 4.5;

    const languages = [
      { name: 'English', level: 'Advanced (C1)' },
      { name: 'Malayalam', level: 'Proficient (C2)' },
      { name: 'Hindi', level: 'Upper Intermediate (B2)' }
    ];

    languages.forEach(lang => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(15, 23, 42);
      doc.text(lang.name, leftColX, leftY);
      
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(100, 116, 139);
      doc.text(lang.level, leftColX + 20, leftY);
      leftY += 4.5;
    });

    // --- RIGHT COLUMN CONTENT ---
    let rightY = topColY;

    // Professional Summary
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(0, 0, 0);
    doc.text('PROFESSIONAL SUMMARY', rightColX, rightY);
    rightY += 1.5;
    doc.setLineWidth(0.3);
    doc.setDrawColor(0, 0, 0);
    doc.line(rightColX, rightY, rightColEnd, rightY);
    rightY += 4.5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(51, 65, 85);

    const summaryText = "Motivated B.Sc. Computer Science student with a strong interest in front-end web development, Python, and Artificial Intelligence/Machine Learning. Skilled in HTML, CSS, JavaScript, and Python, with hands-on experience gained through academic projects and an AI/ML internship. Experienced as a college video editor and poster designer, demonstrating creativity, teamwork, and attention to detail. Eager to apply technical and problem-solving skills in internship and entry-level software development roles.";
    const splitSummary = doc.splitTextToSize(summaryText, rightColWidth);
    doc.text(splitSummary, rightColX, rightY);
    rightY += splitSummary.length * 3.8 + 4;

    // Professional Experience
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(0, 0, 0);
    doc.text('PROFESSIONAL EXPERIENCE', rightColX, rightY);
    rightY += 1.5;
    doc.line(rightColX, rightY, rightColEnd, rightY);
    rightY += 4.5;

    const experiences = [
      {
        role: 'Python Intern',
        date: 'Jan 2026 – Jun 2026',
        company: 'Regional Technologies, Kozhikode, India',
        bullets: [
          'Gained hands-on experience in Python programming and AI/ML fundamentals.',
          'Optimized data preprocessing methods to improve machine learning outcomes.',
          'Developed proficiency in Machine learning fundamentals, including model training and evaluation.'
        ]
      },
      {
        role: 'Web Developer (Freelance)',
        date: 'Jan 2026 – Current',
        company: 'Remote',
        bullets: [
          'Developed a responsive website for a medical laboratory using HTML, CSS, and JavaScript.',
          'Designed a clean, user-friendly interface to showcase laboratory services and information.',
          'Optimized the website for mobile, tablet, and desktop devices.'
        ]
      },
      {
        role: 'Video Editor (Freelance)',
        date: 'Jun 2024 – Current',
        company: 'Remote',
        bullets: [
          'Edited promotional, academic, and event videos for the college.',
          'Created engaging video content using professional editing software.',
          'Collaborated with faculty and student organizers to deliver videos on time.'
        ]
      },
      {
        role: 'Poster Designer (Freelance)',
        date: 'Sep 2025 – Current',
        company: 'Remote',
        bullets: [
          'Designed promotional posters and social media graphics for college events and activities.',
          'Created visually engaging layouts using typography, color, and branding principles.',
          'Collaborated with event organizers to produce creative marketing materials.'
        ]
      }
    ];

    experiences.forEach(exp => {
      // Bullet dot and Role Title
      doc.setFillColor(29, 78, 216); // Blue dot
      doc.circle(rightColX + 1.2, rightY - 1, 0.9, 'F');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(0, 0, 0);
      doc.text(exp.role, rightColX + 3.5, rightY);

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.5);
      doc.setTextColor(71, 85, 105);
      const dateWidth = doc.getTextWidth(exp.date);
      doc.text(exp.date, rightColEnd - dateWidth, rightY);
      rightY += 3.8;

      // Company
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.5);
      doc.setTextColor(29, 78, 216);
      doc.text(exp.company, rightColX + 3.5, rightY);
      rightY += 3.8;

      // Bullets
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.8);
      doc.setTextColor(51, 65, 85);
      exp.bullets.forEach(b => {
        const lines = doc.splitTextToSize(`•  ${b}`, rightColWidth - 4);
        doc.text(lines, rightColX + 3.5, rightY);
        rightY += lines.length * 3.5;
      });
      rightY += 3;
    });

    // Education
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(0, 0, 0);
    doc.text('EDUCATION', rightColX, rightY);
    rightY += 1.5;
    doc.line(rightColX, rightY, rightColEnd, rightY);
    rightY += 4.5;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(0, 0, 0);
    doc.text('Bachelor of Computer Science', rightColX, rightY);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(71, 85, 105);
    const expEduDate = 'Expected Mar 2027';
    const dateWidth = doc.getTextWidth(expEduDate);
    doc.text(expEduDate, rightColEnd - dateWidth, rightY);
    rightY += 3.8;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(29, 78, 216);
    doc.text('Regional College of Science and Humanities', rightColX, rightY);
    rightY += 3.8;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(100, 116, 139);
    doc.text('Kizhisseri, Kerala, India', rightColX, rightY);

    // 2. Save directly as PDF file
    doc.save('Razal_NC_Resume.pdf');
  } catch (error) {
    console.error('PDF Generation failed:', error);
  }
}
