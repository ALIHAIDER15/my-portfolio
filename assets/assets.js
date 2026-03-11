import user_image from './user-image.jpeg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.jpeg';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

// Tool SVGs
import vs from './vs.svg';
import sqlserver from './sqlserver.svg';
import azure from './azure.svg';
import claude from './Claude.svg.png';
import photoshop from './photoshop.svg';
import jira from './jira.svg';
import cpu from './cpu.png';
import code from './code.png';
import software_dev from './software-development.png';
import api from './api.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'NFS Ascent',
        client: 'Mercedes-Benz / BMW',
        category: 'Enterprise',
        shortDescription: 'A cutting-edge platform for auto, equipment, and big-ticket finance companies to run retail and wholesale operations with ease.',
        description: 'NFS Ascent is a comprehensive finance management platform built using modern technologies to support auto, equipment, and large-ticket finance companies, as well as banks, in managing their retail and wholesale finance operations efficiently.\\n\\nThe system provides extensive domain coverage and powerful configuration capabilities, enabling finance and leasing companies to scale their business operations and manage high transaction volumes effectively.\\n\\nNFS Ascent is also available as a cloud-based solution, offering flexible subscription pricing, rapid deployment, and scalable infrastructure to support business growth.\\n\\n**Key Contributions:**\\n• Stationery Module Enhancement: Improved the document generation process for receipts, contracts, and quotations, enabling seamless generation in Word and PDF formats for professional documentation.\\n• Reporting Module Contribution: Worked on the reporting module to generate detailed reports and analytics, helping stakeholders make informed business decisions.\\n• Accounting Module Integration: Managed and generated SAP-compatible accounting data to ensure accurate financial records and smooth integration with external accounting systems.',
        techStack: ['C#', '.NET', 'ASP.NET', 'WPF', 'Entity Framework', 'MS SQL Server', 'Telerik Reporting', 'React', 'AngularJS', 'AJAX', 'JSON', 'HTML5', 'CSS3', 'Bootstrap 5', 'XAML', 'SVN', 'Agile'],
        liveUrl: '',
        githubUrl: '',
        bgImage: '/NFS-Ascent-Logo-Colored.png',
    },
    {
        title: 'Code of Business Ethics (COBE)',
        client: 'Qatar Energy',
        category: 'Enterprise',
        shortDescription: 'An internal compliance platform managing annual employee declarations, integrated with Azure AD, APIM, and background jobs.',
        description: 'Code of Business Ethics (COBE) is an internal Qatar Energy platform designed to manage annual employee declarations related to gifts, relatives, external employment, and business interests. The system ensures compliance with corporate governance policies while providing secure, role-based access for both internal and external users.\\n\\nThe application is built using Blazor (.NET Core) and integrated with APIs for employee data, email, and SMS notifications. It is deployed on Azure and uses background jobs to send automated reminders. Azure API Management (APIM) is used to securely expose internal APIs.\\n\\n**Key Contributions:**\\n• Multi-Step Form Development: Implemented multi-step declaration forms for employees to submit information related to gifts, relatives, external employment, and business interests with proper validation.\\n• Authentication & Authorization: Implemented AFSD authentication for internal users and Azure AD integration for external users to ensure secure access.\\n• API Integration: Integrated APIs for retrieving employee data, sending email and SMS notifications, and exposing services via Azure APIM.\\n• Background Jobs: Developed scheduled background jobs to send automated reminder emails before declaration deadlines.\\n• Deployment & Maintenance: Assisted in deploying and maintaining the application on Azure, ensuring secure and scalable performance.\\n• Collaboration: Coordinated with compliance teams to ensure the platform aligns with Qatar Energy’s business ethics policies.',
        techStack: ['C#', 'ASP.NET Core', 'Blazor', 'Entity Framework Core', 'SQL Server', 'REST APIs', 'Azure', 'Azure AD', 'Azure DevOps', 'APIM', 'Background Jobs', 'Agile', 'Clean Architecture'],
        liveUrl: '',
        githubUrl: '',
        bgImage: '/qatarenergy-logo.png',
    },
    {
        title: 'Country Profiling System',
        client: 'Ministry of Foreign Affairs (MOFA), Qatar',
        category: 'Government',
        shortDescription: 'A centralized AI-driven platform aggregating data on countries, states, and leaders with complex multi-level approval workflows.',
        description: 'Enterprise government platform providing centralized, up-to-date information about countries, states, their leaders, designations, and biodata. Leveraging AI technologies, the system aggregates and enriches data from multiple sources into a single, comprehensive view.\\n\\nThe platform also supports multi-level approval workflows across embassies, departments, and minister-level users, along with role-based access control, approval/rejection processes, and version tracking to ensure data integrity and secure operations.\\n\\n**Key Contributions:**\\n• AI Integration: Implemented AI modules to process, consolidate, and enrich data from multiple sources.\\n• Workflow Implementation: Designed and developed multi-level approval workflows for embassies and departments with approval/rejection functionality and version history.\\n• Role-Based Access Control: Managed and updated roles and permissions for embassies, departments, and minister-level users.\\n• System Maintenance & Enhancements: Maintained platform stability, fixed bugs, and implemented incremental improvements without disrupting ongoing operations.\\n• Collaboration: Coordinated with cross-functional teams to integrate workflows and AI features while preserving existing data integrity.',
        techStack: ['C#', 'ASP.NET Core', 'Entity Framework Core', 'SQL Server', 'Azure', 'Azure AD', 'Azure AI Services', 'Azure DevOps', 'REST APIs', 'jQuery', 'AJAX', 'Bootstrap 5', 'Agile', 'Clean Architecture'],
        liveUrl: '',
        githubUrl: '',
        bgImage: '/Mofa-Logo-V3.png',
    },
    {
        title: 'Qatar Olympic Media Portal',
        client: 'Qatar Olympic Committee (Organizer of FIFA World Cup Qatar)',
        category: 'Government',
        shortDescription: 'An AI-powered enhancement of the media library integrating facial recognition, object detection, and automated metadata extraction.',
        description: 'A media management platform for handling and sharing high-resolution audio, video, images, and documents, including large file uploads (1GB to 1TB+). Collaborated with the AI team to integrate face recognition, image/video analysis, automatic keyword generation, and intelligent metadata extraction, improving search accuracy, content discoverability, and user experience.\\n\\nThe platform supports AI-powered search, intelligent filtering, metadata extraction, and efficient handling of extremely large media files for enterprise-scale operations.\\n\\n**Key Contributions:**\\n• AI Collaboration: Worked closely with the AI team to implement face recognition, image/video analysis, and automatic keyword generation.\\n• Large File Upload Handling: Developed support for uploading and processing extremely large media files (1GB–1TB+) efficiently and reliably.\\n• AI-Powered Search: Implemented search functionality that returns highly relevant media results using AI insights.\\n• Content Recognition: Integrated AI algorithms to detect objects, people, and activities in media files for context-aware search.\\n• Enhanced Metadata Analysis: Applied AI to automatically extract metadata from media files for faster and more precise retrieval.\\n• Intelligent Filtering: Enabled AI-assisted filtering by name, keyword, location, sport, or other attributes to improve user experience.',
        techStack: ['C#', 'ASP.NET Core', 'Entity Framework Core', 'SQL Server', 'Azure', 'Microsoft Entra ID (Azure AD)', 'Azure AI Services', 'Azure DevOps', 'Azure Blob Storage', 'REST APIs', 'jQuery', 'AJAX', 'HTML5', 'CSS3', 'Bootstrap 5', 'Agile', 'Clean Architecture'],
        liveUrl: '',
        githubUrl: '',
        bgImage: '/Qatar_Olympic_Committee_new_logo.png',
    },
    {
        title: 'Qatar Media Library (QML)',
        client: 'Qatar Govt Office (GCO)',
        category: 'Government',
        shortDescription: 'An official centralized media repository to store, manage, and share high-resolution assets (1GB to 1TB+) with hierarchical search.',
        description: 'Qatar Media Library (QML) is an official government platform for storing, managing, and sharing high-resolution audio, video, images, and documents, including large file uploads (1GB to 1TB+) with bulk upload capability. The platform serves as a centralized media repository with secure data storage, role-based access control, and hierarchical media organization for efficient enterprise-level media management.\\n\\n**Key Contributions:**\\n• Search Functionality: Developed advanced search with multiple filters to retrieve results in N-level hierarchical structures. Planned integration with AI-based search for enhanced discoverability.\\n• My Collection Module: Designed and implemented functionality to create, update, delete collections, and search media within collections. Supports N-level sub-collections with filters based on keyword, metadata, and date.\\n• Collection Access Module: Built module to provide users with access to media shared by others, based on roles and permissions. Integrated pagination, sorting, and filtering for improved data accessibility.\\n• Approval Module: Developed approval/rejection workflow for media files with dynamic actions based on user roles, ensuring proper content validation and workflow management.',
        techStack: ['C#', 'ASP.NET Core', 'Entity Framework Core', 'SQL Server', 'Azure', 'Microsoft Entra ID (Azure AD)', 'Azure AI Services', 'Azure DevOps', 'Azure Blob Storage', 'REST APIs', 'jQuery', 'AJAX', 'HTML5', 'CSS3', 'Bootstrap 5', 'Agile', 'Clean Architecture'],
        liveUrl: 'https://qml.gco.gov.qa/',
        githubUrl: '',
        bgImage: '/GCO-Logo-Clean.png',
    },
    {
        title: 'Wellyx',
        client: 'Wellyx',
        category: 'Management',
        shortDescription: 'A seamless platform offering Scheduling, Point of Sale, Automation, Rewards, and Waitlist management.',
        description: 'Wellyx is an integrated platform revolutionizing the health and wellness industry by providing a unified solution for Gym and Spa management. The platform combines scheduling, point of sale, automation, rewards, and waitlist management into a cohesive system.\\n\\nIt consists of two platforms: Core for staff and Widget for customers, ensuring a seamless and user-friendly experience.\\n\\n**Key Contributions:**\\n• Reward Program Module: Enhanced the reward points system, calculating points based on user types and enabling users to redeem points for services, product purchases, classes, and memberships.\\n• Back-End Development: Worked on implementing robust business logic for reward point calculation, validation, and redemption workflows.\\n• Integration: Ensured smooth integration with the platform’s scheduling, POS, and membership modules.',
        techStack: ['C#', '.NET Core', 'ASP.NET Core', 'ADO.NET', 'MS SQL Server', 'RDLC Reports', 'REST APIs', 'JSON', 'AJAX', 'Angular', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap 4', 'TSF', 'Agile'],
        liveUrl: 'https://wellyx.com/',
        githubUrl: '',
        bgImage: '/weelyx-logo.png',
    },
    {
        title: 'CMS UET Mardan',
        client: 'UET Mardan',
        category: 'Management',
        shortDescription: 'Streamlines education management by handling student data, enrollment, grading, transcripts, and faculty support.',
        description: 'CMS UET Mardan is an efficient educational management system designed to manage student data and streamline administrative tasks. The platform supports functionalities including student enrollment, grade recording, transcripts, test results, assessments, scheduling, attendance monitoring, and general student data management.\\n\\nIt also provides tools for faculty members and administrative departments to manage courses and evaluations effectively, ensuring smooth operation within the educational institution.\\n\\n**Key Contributions:**\\n• QEC Module Development: Spearheaded development of the Quality Enhancement Cell (QEC) module for conducting comprehensive surveys of students, faculty, and administration.\\n• Dynamic Survey Design: Implemented features to create distinct question areas, multiple question types, and individual questions, allowing flexible survey creation.\\n• Back-End Logic: Developed robust backend logic for survey management, data storage, and retrieval, ensuring secure and accurate reporting.\\n• Integration: Ensured smooth integration of QEC module with student, course, and faculty data modules.\\n• Collaboration: Worked closely with the academic and administrative teams to align survey workflows with institutional requirements.',
        techStack: ['C#', 'ASP.NET', 'ADO.NET', 'MS SQL Server', 'REST APIs', 'JSON', 'AJAX', 'jQuery', 'HTML5', 'CSS3', 'Bootstrap 4', 'Git', 'Agile'],
        liveUrl: 'https://cms.uetmardan.edu.pk/Login/Login',
        githubUrl: '',
        bgImage: '/UET-Logo.png',
    },
    {
        title: 'BundleBooks',
        client: 'Local Organization',
        category: 'Freelance',
        shortDescription: 'An online bookstore platform catering to both individual and corporate book purchases with deferred payments.',
        description: 'BundleBooks is an online bookstore platform catering to both individual and corporate book purchases. The platform supports multiple roles, including Admin, Employee, Individual Customer, and Company Customer, with Company Customers benefiting from deferred payment options.\\n\\nAdmin users manage company accounts and users, including creation, updates, deletion, access control, and authorization management. The platform also integrates multiple third-party APIs for payments, messaging, and content editing, enhancing user experience and operational efficiency.\\n\\n**Key Contributions:**\\n• Third-Party API Integrations:\\n  - PayPal & Stripe: Enabled online payment processing for individual and corporate customers.\\n  - Braintree: Integrated full-stack payment capabilities for seamless in-app and web transactions.\\n  - Twilio: Implemented SMS and call notifications for user alerts and transaction confirmations.\\n  - TinyMCE: Integrated rich-text editor for content creation within the platform.\\n• Role-Based Access Management: Implemented secure access controls and authorization workflows for Admin and Employee users.\\n• Business Logic Implementation: Developed back-end logic for order processing, deferred payments for Company Customers, and inventory management.\\n• Database Optimization: Optimized queries and data operations using MS SQL Server, Entity Framework Core, and Dapper for high performance.',
        techStack: ['C#', 'ASP.NET Core', 'Azure', 'Entity Framework Core', 'Dapper', 'MS SQL Server', 'REST APIs', 'JSON', 'AJAX', 'JavaScript', 'jQuery', 'HTML5', 'CSS3', 'Bootstrap 4'],
        liveUrl: '',
        githubUrl: '',
        bgImage: '/BundleBook1.png',
    },
]

export const serviceData = [
    { icon: software_dev, title: 'Enterprise Software Development', description: 'Architecting and building scalable, secure, and robust web applications and centralized platforms.', link: '' },
    { icon: azure, title: 'Cloud & Azure Solutions', description: 'Designing, deploying, and managing complex cloud infrastructures, automated pipelines, and background jobs.', link: '' },
    { icon: cpu, title: 'AI Integration & Data Analysis', description: 'Enhancing platforms with advanced AI capabilities, including intelligent metadata extraction and advanced search.', link: '' },
    { icon: api, title: 'API & Integration Engineering', description: 'Developing and integrating seamless APIs with third-party tools, payment gateways, and enterprise systems.', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Technologies', description: '.NET, Next.js, Azure, SQL Server' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'BS in Computer Science — Gold Medalist 🥇' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 11 projects' }
];


export const toolsData = [
    { icon: vs, name: 'Visual Studio' },
    { icon: vscode, name: 'VS Code' },
    { icon: sqlserver, name: 'SQL Server' },
    { icon: azure, name: 'Azure' },
    { icon: claude, name: 'Claude AI' },
    { icon: git, name: 'Git' },
    { icon: photoshop, name: 'Photoshop' },
    { icon: figma, name: 'Figma' },
    { icon: jira, name: 'Jira' }
];