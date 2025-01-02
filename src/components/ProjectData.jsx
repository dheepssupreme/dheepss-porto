const projects = [
  {
    id: "1",
    Title: "Docker web server using nginx",
    Description: "Implementasi web server menggunakan Nginx di dalam container Docker dengan konfigurasi load balancing dan high availability menggunakan Kubernetes.",
    Img: "/images/docker-nginx.png",
    Github: "https://github.com/dheepssupreme/docker-nginx",
    TechStack: ["Docker", "Kubernetes", "Nginx"],
    Features: [
      "Container orchestration dengan Kubernetes",
      "Load balancing dengan Nginx",
      "High availability setup",
      "Docker compose configuration"
    ]
  },
  {
    id: "2",
    Title: "Portfolio Website",
    Description: "Personal portfolio website dibangun dengan React, Tailwind CSS, dan berbagai animasi modern.",
    Img: "/images/portfolio.png",
    Github: "https://github.com/dheepssupreme/dheepss-porto",
    TechStack: ["React", "Tailwind CSS", "Vite"],
    Features: [
      "Responsive design",
      "Modern animations",
      "Project showcase",
      "Dark theme"
    ]
  }
  // Tambahkan project lainnya sesuai kebutuhan
];

export default projects; 