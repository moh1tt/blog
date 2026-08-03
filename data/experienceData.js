const experienceData = [
  {
    title: 'Data Scientist',
    company: 'APD',
    range: 'June 2025 – Present',
    text1:
      'Build ARIMA, VAR, and regression forecasting models over $200M+ in monthly transaction volume to inform budget submissions, provider rate decisions, and capacity planning across a 60,000+ member population.',
    text2:
      'Architect 40+ automated ETL pipelines (Python, SQL Server, Azure Data Warehouse) processing 300K+ monthly records, and lead Power BI development for executive dashboards tracking $180M in program spend — replacing manual reporting with self-serve analytics.',
    text3:
      'Optimized the agency\'s heaviest SQL workloads through indexing, partitioning, and stored procedures — 83% runtime reduction (60 min → under 10 min). Apply CI/CD practices to analytics deployment and translate stakeholder requirements into production-grade analytical systems.',
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
      'Built and shipped a production data platform processing 10,000+ financial filings and business documents per day — OCR and CNN-based classification converting unstructured and scanned filings into structured data feeding S&P Global\'s downstream research and analytics products.',
    text2:
      'Engineered cloud data pipelines on AWS (S3, Athena) and BigQuery for large-scale financial dataset ingestion and transformation, enabling near real-time availability for downstream consumers. Designed a modular Python extraction framework with CDC-based incremental updates and 80% test coverage, cutting onboarding cost for new document types across multiple business domains.',
    text3:
      'Developed REST API integrations with schema validation and GitHub Actions CI/CD. Led a team of 5 engineers through the legacy .NET-to-Python migration, standardizing the extraction stack and training the team on the new tooling.',
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
