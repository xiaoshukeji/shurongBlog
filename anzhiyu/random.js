var posts=["2026/07/28/hello-world/","2026/07/28/ai-agent-notes/","2026/07/28/frontend-roadmap/","2026/07/28/life-bright/","2026/07/28/project-build-log/","2026/07/28/year-summary/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };