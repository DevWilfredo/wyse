type TechnologyVisualProps = {
  variant: "voltage" | "ai" | "peak" | "network";
};

const aiNodes = [
  [140,35], [310,15], [480,65], [650,25], [810,55],
  [105,145], [275,175], [445,115], [615,165], [785,105],
  [185,210], [350,190], [515,220], [680,185], [835,200],
];
const aiEdges = [
  [0,1],[0,5],[0,7],[1,2],[1,6],[1,7],[2,3],[2,7],[2,8],[3,4],[3,8],[3,9],
  [4,9],[4,14],[5,6],[5,10],[6,7],[6,10],[6,11],[7,8],[7,11],[7,12],[8,9],
  [8,12],[8,13],[9,13],[9,14],[10,11],[11,12],[12,13],[13,14],
];
const aiCoreNodes = new Set([2,7,8,11]);
const gridNodes = [
  [72,42],[212,27],[354,54],[508,30],[656,62],
  [112,132],[264,106],[420,143],[574,111],[686,154],
  [54,224],[188,198],[340,226],[490,190],[632,224],
];
const gridEdges = [
  [0,1],[0,5],[0,6],[1,2],[1,5],[1,6],[1,7],[2,3],[2,6],[2,7],[2,8],
  [3,4],[3,7],[3,8],[3,9],[4,8],[4,9],[5,6],[5,10],[5,11],[6,7],[6,10],
  [6,11],[6,12],[7,8],[7,11],[7,12],[7,13],[8,9],[8,12],[8,13],[8,14],
  [9,13],[9,14],[10,11],[11,12],[12,13],[13,14],
];

export default function TechnologyVisual({ variant }: TechnologyVisualProps) {
  if (variant === "voltage") return <svg className="tech-svg tech-svg-voltage" viewBox="0 0 720 260" role="img" aria-label="Real-time voltage optimization waveform">
    <defs><linearGradient id="voltage-fill" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#00d1f3" stopOpacity=".28"/><stop offset="1" stopColor="#00d1f3" stopOpacity="0"/></linearGradient><filter id="voltage-glow"><feGaussianBlur stdDeviation="6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
    <g className="tech-grid-lines"><path d="M0 52H720M0 104H720M0 156H720M0 208H720"/><path d="M90 0V260M180 0V260M270 0V260M360 0V260M450 0V260M540 0V260M630 0V260"/></g>
    <path className="voltage-raw" d="M-20 132 C32 102 68 162 118 127 S202 107 252 140 S326 165 374 126 S454 99 505 137 S592 164 646 123 S710 105 752 131"/>
    <path className="voltage-area" d="M360 130 C410 121 448 143 493 130 S574 118 621 133 S690 142 740 126 V260 H360Z"/>
    <path className="voltage-clean voltage-clean-shadow" d="M350 132 C410 121 448 143 493 130 S574 118 621 133 S690 142 740 126"/>
    <path className="voltage-clean" d="M350 132 C410 121 448 143 493 130 S574 118 621 133 S690 142 740 126"/>
    <line className="voltage-gate" x1="350" y1="0" x2="350" y2="260"/><g className="voltage-chip"><rect x="307" y="110" width="86" height="34" rx="8"/><text x="350" y="132">WYSE</text></g>
    <g className="voltage-labels"><text x="34" y="30">UNREGULATED</text><text className="optimized" x="382" y="30">OPTIMIZED</text></g>
    <circle className="voltage-pulse" cx="350" cy="132" r="5"/>
  </svg>;

  if (variant === "ai") return <svg className="tech-svg tech-svg-ai" viewBox="0 0 960 260" role="img" aria-label="Animated artificial intelligence data network">
    <defs><radialGradient id="ai-node"><stop stopColor="#baf7ff"/><stop offset=".2" stopColor="#00d1f3"/><stop offset="1" stopColor="#00d1f3" stopOpacity="0"/></radialGradient><filter id="ai-glow"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
    <g className="ai-edges">{aiEdges.map(([a,b],i)=><line key={i} x1={aiNodes[a][0]} y1={aiNodes[a][1]} x2={aiNodes[b][0]} y2={aiNodes[b][1]}/>)}</g>
    <g className="ai-core-path"><path d="M350 190 L445 115 L480 65 M445 115 L615 165 L480 65 M350 190 L615 165"/></g>
    <g className="ai-traces"><path style={{"--trace-delay":"0s"} as React.CSSProperties} d="M350 190 L445 115 L480 65 L615 165"/><path style={{"--trace-delay":"-1.7s"} as React.CSSProperties} d="M615 165 L445 115 L350 190"/></g>
    <g>{aiNodes.map(([x,y],i)=><g className={aiCoreNodes.has(i)?"ai-node ai-node-major":"ai-node ai-node-minor"} style={{"--node-delay":`${i*-.24}s`} as React.CSSProperties} key={i} transform={`translate(${x} ${y})`}>{aiCoreNodes.has(i)&&<><circle className="ai-ring ai-ring-one" r="22"/><circle className="ai-ring ai-ring-two" r="31"/></>}<circle className="ai-halo" r={aiCoreNodes.has(i)?25:11} fill="url(#ai-node)"/><circle className="ai-core" r={aiCoreNodes.has(i)?7:3.5}/></g>)}</g>
  </svg>;

  if (variant === "peak") return <svg className="tech-svg tech-svg-peak" viewBox="0 0 960 300" role="img" aria-label="Peak demand curve being smoothed">
    <defs><linearGradient id="peak-fill" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#00d1f3" stopOpacity=".3"/><stop offset="1" stopColor="#00d1f3" stopOpacity="0"/></linearGradient><filter id="peak-glow"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
    <g className="peak-guide-lines"><path d="M78 48H930M78 148H930M78 250H930"/></g>
    <g className="peak-labels"><text x="28" y="54">HI</text><text x="28" y="150">MD</text><text x="28" y="256">LO</text></g>
    <path className="peak-original" d="M78 250 C150 235 198 192 226 28 C254 130 272 185 302 162 L380 36 C416 116 432 150 480 174 C552 212 590 234 682 240 C780 247 850 248 930 250"/>
    <path className="peak-area" d="M78 250 C212 236 250 151 355 128 C476 101 563 126 664 178 C764 229 835 245 930 250 V300 H78Z"/>
    <path className="peak-smooth peak-shadow" d="M78 250 C212 236 250 151 355 128 C476 101 563 126 664 178 C764 229 835 245 930 250"/>
    <path className="peak-smooth" d="M78 250 C212 236 250 151 355 128 C476 101 563 126 664 178 C764 229 835 245 930 250"/>
    <line className="peak-marker" x1="228" y1="20" x2="228" y2="112"/><circle className="peak-runner" r="5"><animateMotion dur="5s" repeatCount="indefinite" path="M78 250 C212 236 250 151 355 128 C476 101 563 126 664 178 C764 229 835 245 930 250"/></circle>
    <g className="peak-offpeak"><rect x="166" y="10" width="124" height="32" rx="7"/><text x="228" y="31">OFF-PEAK</text></g>
    <g className="peak-legend"><line x1="684" y1="18" x2="728" y2="18"/><text x="742" y="22">BEFORE</text><line className="managed" x1="684" y1="44" x2="728" y2="44"/><text className="managed-text" x="742" y="48">WYSE MANAGED</text></g>
    <g className="peak-time"><text x="78" y="288">12AM</text><text x="286" y="288">6AM</text><text x="492" y="288">12PM</text><text x="704" y="288">6PM</text><text x="902" y="288">12AM</text></g>
  </svg>;

  return <svg className="tech-svg tech-svg-network" viewBox="0 0 720 260" role="img" aria-label="Distributed grid intelligence network">
    <defs><radialGradient id="network-core"><stop stopColor="#d9fbff"/><stop offset=".16" stopColor="#00d1f3"/><stop offset=".55" stopColor="#00a6c4" stopOpacity=".42"/><stop offset="1" stopColor="#00d1f3" stopOpacity="0"/></radialGradient></defs>
    <g className="network-grid"><path d="M0 42H720M0 132H720M0 224H720"/></g>
    <g className="network-diamonds">{gridEdges.map(([a,b],i)=><line key={i} x1={gridNodes[a][0]} y1={gridNodes[a][1]} x2={gridNodes[b][0]} y2={gridNodes[b][1]}/>)}</g>
    <g className="network-flow"><path style={{"--flow-delay":"0s"} as React.CSSProperties} d="M54 224L264 106L354 54L420 143L574 111L656 62"/><path style={{"--flow-delay":"-2.1s"} as React.CSSProperties} d="M72 42L212 27L420 143L490 190L632 224"/><path style={{"--flow-delay":"-4.2s"} as React.CSSProperties} d="M686 154L508 30L340 226L188 198L112 132"/></g>
    <g className="network-nodes">{gridNodes.map(([x,y],i)=><circle className={i===6||i===7||i===8||i===12?"network-node-accent":""} style={{"--network-delay":`${i*-.21}s`} as React.CSSProperties} key={i} cx={x} cy={y} r={i===6||i===7||i===8||i===12?4.8:3}/>)}</g>
    <circle className="network-ring ring-one" cx="340" cy="132" r="29"/><circle className="network-ring ring-two" cx="340" cy="132" r="40"/><circle className="network-center" cx="340" cy="132" r="31" fill="url(#network-core)"/><circle className="network-core" cx="340" cy="132" r="7"/>
    <circle className="network-packet packet-one" r="3"><animateMotion dur="4.4s" repeatCount="indefinite" path="M54 224L264 106L354 54L420 143L574 111L656 62"/></circle><circle className="network-packet packet-two" r="2.5"><animateMotion dur="5.6s" begin="-2.8s" repeatCount="indefinite" path="M686 154L508 30L340 226L188 198L112 132"/></circle><circle className="network-packet packet-three" r="2.2"><animateMotion dur="6.4s" begin="-4.1s" repeatCount="indefinite" path="M72 42L212 27L420 143L490 190L632 224"/></circle>
  </svg>;
}
