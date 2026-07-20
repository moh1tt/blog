const experienceData = [
  {
    title: 'Data Analyst',
    company: 'APD',
    range: 'June 2025 – Present',
    text1:
      'Designed and implemented Python/SQL-based analytical workflows to transform ambiguous operational questions into structured statistical analyses, automating SPSS execution and validation to support evidence-based decision-making across programs.',
    text2:
      'Built and maintained 40+ automated ETL pipelines processing 300,000+ records (Python, SQL Server, Azure Data Warehouse, Docker), implementing data validation and lineage tracking to ensure reliability for downstream statistical and trend analysis.',
    text3:
      'Conducted time-series trend and anomaly analysis on operational metrics to detect spikes and shifts linked to system changes, translating findings into actionable insights for 50+ stakeholders via Power BI and Tableau dashboards — while optimizing SQL query performance to cut analytical report latency by 83% (60 min to under 10 min).',
  },
  {
    title: 'Research Assistant',
    company: 'Florida State University',
    range: 'June 2024 – September 2024',
    text1:
      'Researched generative models (GANs, VAEs, RNNs, Diffusion) under Dr. Bin Ouyang for synthetic molecular data generation, focused on discovering stable, sustainable materials for lithium-ion battery applications using AI-driven compound synthesis.',
    text2:
      'Benchmarked and fine-tuned deep learning models (NequIP) via transfer learning across an 11,000+ material dataset, improving prediction consistency by 15% through iterative experimentation and hyperparameter optimization.',
    text3:
      'Designed and executed controlled experiments across multiple model architectures using A/B testing and statistical comparison methods, tracked via MLflow, ensuring rigorous, reproducible model evaluation and informing experimentation design practices.',
  },
  {
    title: 'Software Developer',
    company: 'S&P Global',
    range: 'January 2022 – June 2023',
    text1:
      'Built a production-grade data extraction platform processing 10,000+ documents/day, combining OCR and CNN-based classification models to convert unstructured PDFs and scanned documents into structured datasets for downstream analysis and modeling.',
    text2:
      'Engineered cloud-based data pipelines (AWS S3, Athena, BigQuery) to ingest, transform, and serve large-scale datasets, enabling analysts and downstream models to access up-to-date structured data within minutes.',
    text3:
      'Designed a modular, reusable Python extraction framework with CDC-based updates and 80% test coverage, and developed REST API integrations with schema validation and CI/CD (GitHub Actions) to improve data quality and deployment reliability.',
  },
  {
    title: 'Software Developer Intern',
    company: 'LG Electronics',
    range: 'May 2021 – August 2021',
    text1:
      'Built a proof-of-concept LG WebOS logistics platform in a 2-week ideathon, integrating real-time shipment tracking, live delay and congestion feeds, and a computer vision drowsiness detection system (Python, OpenCV, YOLO) achieving 90% facial landmark accuracy for driver safety.',
    text2:
      'Designed and integrated a CNN-based object recognition module with REST APIs and PostgreSQL for automated package sorting, reducing sorting time by 25% across the logistics workflow.',
    text3:
      'Awarded 3rd place out of all competing teams. Presented the solution to LG leadership and engineering teams, receiving commendation for practical application and technical innovation.',
  },
  {
    title: 'Software Developer Intern',
    company: 'ITC Limited',
    range: 'January 2021 – March 2021',
    text1:
      'Built a Master Data Management system using the MERN stack with role-based authentication (admins, users, vendors) to manage commodity tracking and application workflows across multiple ITC business units.',
    text2:
      'Implemented approval workflows and role-based access controls to enhance data security and streamline user operations across business units.',
    text3:
      'Automated product tracking and data updates, reducing manual workload and improving cross-unit data accuracy through API integrations and backend synchronization.',
  },
]

export default experienceData
