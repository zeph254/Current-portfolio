import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiBook, FiCode, FiAward } from 'react-icons/fi';
import { FaReact, FaPython, FaNodeJs } from 'react-icons/fa';
import { SiFlask, SiTailwindcss, SiJavascript } from 'react-icons/si';

const About = () => {
  const education = [
    {
      icon: <FiBook className="text-blue-400" />,
      year: "2019",
      institution: "Twin Bird Junior School",
      qualification: "Certificate of Primary Education",
      grade: "Mark: 327"
    },
    {
      icon: <FiBook className="text-blue-400" />,
      year: "2020 - 2023",
      institution: "St. Peter's Minor Seminary",
      qualification: "Certificate of Secondary Education",
      grade: "Grade: B"
    },
    {
      icon: <FiCode className="text-blue-400" />,
      year: "2024 - 2025",
      institution: "Moringa School",
      qualification: "Certificate of Software Engineering",
      grade: ""
    }
  ];

  const techStack = [
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Python", icon: <FaPython className="text-blue-600" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Flask", icon: <SiFlask className="text-gray-300" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> }
  ];

  // Rock Paper Scissors Game State
  const [game, setGame] = useState({
    playerChoice: null,
    computerChoice: null,
    result: null,
    score: 0,
    gameHistory: []
  });

  const choices = ['rock', 'paper', 'scissors'];

  const playGame = (playerChoice) => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result;
    
    if (playerChoice === computerChoice) {
      result = 'draw';
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      result = 'win';
    } else {
      result = 'lose';
    }

    const newScore = result === 'win' ? game.score + 1 : game.score;
    const newHistory = [...game.gameHistory, { playerChoice, computerChoice, result }].slice(-5);

    setGame({
      playerChoice,
      computerChoice,
      result,
      score: newScore,
      gameHistory: newHistory
    });
  };

  const resetGame = () => {
    setGame({
      playerChoice: null,
      computerChoice: null,
      result: null,
      score: 0,
      gameHistory: []
    });
  };

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            About Me
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Get to know the person behind the code and my journey in tech
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-200 mb-6 flex items-center gap-3">
                <FiUser className="text-blue-400" /> Personal Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-gray-400 min-w-[120px]">Name:</span>
                  <span className="text-gray-200">Zephania Owuor</span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-400 min-w-[120px]">Email:</span>
                  <span className="text-gray-200">ularezephaniah@gmail.com</span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-400 min-w-[120px]">Phone:</span>
                  <span className="text-gray-200">+254 798 551 128</span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-400 min-w-[120px]">Date of Birth:</span>
                  <span className="text-gray-200">24/5/2006</span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-400 min-w-[120px]">Nationality:</span>
                  <span className="text-gray-200">Kenyan</span>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mt-8">
                <h4 className="text-lg font-medium text-gray-300 mb-4">Tech Stack</h4>
                <div className="flex flex-wrap gap-3">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -3 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 rounded-full border border-gray-600"
                    >
                      <span className="text-xl">{tech.icon}</span>
                      <span className="text-gray-300 text-sm">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Education & Journey */}
          <div className="space-y-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-200 mb-6 flex items-center gap-3">
                  <FiBook className="text-blue-400" /> Education
                </h3>
                
                <div className="space-y-6">
                  {education.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-4 pb-6 border-b border-gray-700 last:border-0 last:pb-0"
                    >
                      <div className="text-2xl mt-1">{item.icon}</div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-blue-400 text-sm">{item.year}</span>
                        </div>
                        <h4 className="text-lg font-medium text-gray-200 mt-1">{item.institution}</h4>
                        <p className="text-gray-400">{item.qualification}</p>
                        {item.grade && <p className="text-gray-400 text-sm mt-1">{item.grade}</p>}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Professional Journey and Game */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Journey Section */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 shadow-lg h-full">
                  <h3 className="text-xl font-semibold text-gray-200 mb-4 flex items-center gap-2">
                    <FiAward className="text-blue-400" /> My Journey
                  </h3>
                  
                  <p className="text-gray-400 mb-3">
                    I'm an aspiring full-stack developer skilled in React, Node.js, and Flask with a passion for building scalable applications.
                  </p>
                  
                  <p className="text-gray-400">
                    My journey in tech began with curiosity and has grown into a passion for problem-solving and creating digital solutions.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="bg-gray-700/50 rounded-lg p-3 text-center border border-gray-600">
                      <div className="text-xl font-bold text-blue-400">100+</div>
                      <div className="text-gray-400 text-xs">Projects</div>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-3 text-center border border-gray-600">
                      <div className="text-xl font-bold text-blue-400">1000+</div>
                      <div className="text-gray-400 text-xs">Hours Coding</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Rock Paper Scissors Game */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 shadow-lg h-full">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-semibold text-gray-200 flex items-center gap-2">
                      <FiCode className="text-emerald-400" /> Rock Paper Scissors
                    </h3>
                    <button 
                      onClick={resetGame}
                      className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
                    >
                      Reset
                    </button>
                  </div>
                  
                  <div className="text-center mb-4">
                    <div className="text-gray-300 font-medium mb-1">Score: {game.score}</div>
                    <div className={`text-sm font-medium ${
                      game.result === 'win' ? 'text-emerald-400' :
                      game.result === 'lose' ? 'text-red-400' :
                      game.result === 'draw' ? 'text-yellow-400' : 'text-gray-400'
                    }`}>
                      {game.result === 'win' && 'You won!'}
                      {game.result === 'lose' && 'You lost!'}
                      {game.result === 'draw' && 'Draw!'}
                      {!game.result && 'Make your choice'}
                    </div>
                  </div>
                  
                  {/* Choices */}
                  <div className="flex justify-center gap-3 mb-4">
                    {choices.map((choice) => (
                      <motion.button
                        key={choice}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => playGame(choice)}
                        className={`p-3 rounded-full border-2 ${
                          game.playerChoice === choice 
                            ? 'border-blue-400 bg-blue-400/10' 
                            : 'border-gray-600 hover:border-blue-400'
                        }`}
                      >
                        <span className="text-2xl">
                          {choice === 'rock' && '✊'}
                          {choice === 'paper' && '✋'}
                          {choice === 'scissors' && '✌️'}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                  
                  {/* Results */}
                  {game.playerChoice && (
                    <div className="grid grid-cols-2 gap-4 text-center text-sm">
                      <div>
                        <div className="text-gray-400 mb-1">You chose</div>
                        <div className="text-xl">
                          {game.playerChoice === 'rock' && '✊'}
                          {game.playerChoice === 'paper' && '✋'}
                          {game.playerChoice === 'scissors' && '✌️'}
                        </div>
                        <div className="text-gray-300 capitalize">{game.playerChoice}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 mb-1">Computer chose</div>
                        <div className="text-xl">
                          {game.computerChoice === 'rock' && '✊'}
                          {game.computerChoice === 'paper' && '✋'}
                          {game.computerChoice === 'scissors' && '✌️'}
                        </div>
                        <div className="text-gray-300 capitalize">{game.computerChoice}</div>
                      </div>
                    </div>
                  )}
                  
                  {/* Game History */}
                  {game.gameHistory.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <h4 className="text-gray-400 text-sm font-medium mb-2">Recent Games</h4>
                      <div className="space-y-2">
                        {game.gameHistory.slice().reverse().map((round, index) => (
                          <div key={index} className="flex justify-between text-xs">
                            <span className="text-gray-400">
                              {round.playerChoice} vs {round.computerChoice}
                            </span>
                            <span className={
                              round.result === 'win' ? 'text-emerald-400' :
                              round.result === 'lose' ? 'text-red-400' : 'text-yellow-400'
                            }>
                              {round.result}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;