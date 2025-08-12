const FloatingElements = () => {
  const elements = [
    { size: "w-2 h-2", delay: "0s", position: "top-1/4 left-1/4" },
    { size: "w-1 h-1", delay: "1s", position: "top-1/3 right-1/4" },
    { size: "w-3 h-3", delay: "2s", position: "top-2/3 left-1/6" },
    { size: "w-1.5 h-1.5", delay: "3s", position: "top-1/2 right-1/3" },
    { size: "w-2.5 h-2.5", delay: "4s", position: "top-3/4 right-1/6" },
    { size: "w-1 h-1", delay: "5s", position: "top-1/6 left-1/2" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.size} ${element.position} bg-primary rounded-full opacity-20 floating-element`}
          style={{ animationDelay: element.delay }}
        />
      ))}
      
      {/* Larger glowing elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-xl floating-element" 
           style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent/5 rounded-full blur-xl floating-element" 
           style={{ animationDelay: '3s' }} />
    </div>
  );
};

export default FloatingElements;