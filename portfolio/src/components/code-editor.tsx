const CodeEditor = () => {
  const codeContent = `const profile = {
  name: 'Krish Maheshwari',
  title: 'MERN Developer | SDE | Problem Solver',
  skills: [
    'React', 'NextJS', 'Redux', 'Express',
    'MySQL', 'MongoDB', 'Docker', 'AWS', 'TypeScript',
    'JAVA', 'Git'
  ],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  yearsOfExperience: 1,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length > 5 &&
      this.yearsOfExperience >= 0
    );
  }
};`;

  const formatCode = (code: string) => {
    return code
      .replace(/(const|function|return|this)\b/g, '<span class="text-syntax-keyword">$1</span>')
      .replace(/'([^']+)'/g, '<span class="text-syntax-string">\'$1\'</span>')
      .replace(/(\w+):/g, '<span class="text-syntax-property">$1</span>:')
      .replace(/\b(\d+|true|false)\b/g, '<span class="text-syntax-number">$1</span>')
      .replace(/&&/g, '<span class="text-syntax-keyword">&&</span>');
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Terminal Header */}
      <div className="bg-editor-bg rounded-t-lg border border-editor-border">
        <div className="flex items-center justify-between px-4 py-3 border-b border-editor-border">
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-editor-title text-sm font-medium ml-4">developer.js</span>
          </div>
        </div>
      </div>

      {/* Code Content */}
      <div className="bg-editor-bg rounded-b-lg border-x border-b border-editor-border p-6 font-mono text-sm overflow-x-auto">
        <pre 
          className="text-foreground leading-relaxed"
          dangerouslySetInnerHTML={{ __html: formatCode(codeContent) }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;