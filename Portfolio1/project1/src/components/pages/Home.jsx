import React from 'react';
import { FaGithub, FaResearchgate } from 'react-icons/fa';
import { motion } from 'framer-motion';
import profilePic from '../../assets/Avatar.jpg'; // 👈 Add your image to /src/assets
import { TypeAnimation } from 'react-type-animation';
import creative from "../../assets/Creative.jpg";
import Quicklearner from "../../assets/Quicklearner.jpg";
import Timemanagement from "../../assets/TimeManagement.jpg"
import ProjectsPreview from '../ProjectsPreview';


const Home = () => {
  return (
    <main className="min-h-[90vh] bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 flex flex-col items-center justify-center text-center px-4">
      <div className='text-center py-10 px-4'></div>
      {/* 👤 Profile Picture */}
      <motion.img
        src={profilePic}
        alt="Profile"
        className="w-28 h-28 rounded-full shadow-md mb-4"
        style={{ width: "80px", height: "80px", borderRadius: "9999px" }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 10 }}
      />

      {/* 🎯 Name & Tagline */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-blue-800 mb-2"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl font-bold text-black-100 mb-2">
        <h1>Hi, I'm Suchi!</h1>
          </h1>
        
        <TypeAnimation
  sequence={[
    'Transforming data into discovery ✨',
    2000,
    'Exploring genomics & systems biology 💡',
    2000,
    'Building tools for better science 🔬',
    2000
  ]}
  speed={50}
  repeat={Infinity}
  className="text-base text-blue-700"
/>
      </motion.h1>

      <motion.p
        className="text-lg text-gray-700 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        A Bioinformatician transforming data into discovery ✨
      </motion.p>

      {/* 🌐 Social Links */}
      <motion.div
        className="flex space-x-6 text-3xl text-blue-700 mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-black">
          <FaGithub className='w-8 h-8' />
        </a>
        <a href="https://www.researchgate.net/profile/yourname" target="_blank" rel="noreferrer" className="hover:text-black">
          <FaResearchgate className='w-8 h-8' />
        </a>
        <a href="https://www.researchgate.net/profile/yourname"  class="relative w-[140px] h-[50px] bg-gradient-to-t from-[#00154c] via-[#12376e] to-[#23487f] text-white rounded-full border-none outline-none cursor-pointer overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.5)] group">
  <span class="absolute w-full top-1/2 left-0 transform -translate-y-1/2 text-[12px] uppercase tracking-wider transition-all duration-500 group-hover:top-[-100%]">
    Connect with me!
  </span>
  <span class="absolute w-full top-[150%] left-0 transform -translate-y-1/2 text-[12px] uppercase tracking-wider transition-all duration-500 group-hover:top-1/2">
    Great!
  </span>
</a>
      </motion.div>
           
    {/* New Section: INTRODUCTION */}
    <section className="max-w-4xl text-left mt-12">
      <div className='bg-white/60 backdrop-blur-md shadow-md rounded-2xl p-6 border border-gray-300'>
        <h2 className="text-2xl font-bold text-blue-900 mb-4">INTRODUCTION</h2>
        <p className="text-pink-950 mb-2, text-justify">
          I am a passionate bioinformatician with a keen interest in integrating computational methods with biological insights. My work spans genomics, transcriptomics, and systems biology, focusing on transforming raw data into meaningful discoveries. With a solid foundation in both coding and life sciences, I strive to develop innovative tools and pipelines that enhance scientific research and clinical applications.
        </p>
        </div>
      </section>
 
    {/* New Section: SKILLS SUMMARY */}
    <section className='max-w-4xl text-left mt-12'>
    <div className='bg-white/60 backdrop-blur-md shadow-md rounded-2xl p-6 border border-gray-300'>
    <h1 className='text-3xl font-extrabold text-blue-800 mb-0.5 text-center'>SKILLS SUMMARY</h1>

    {/* Programming Languages */}
    <div>
            <h3 className="text-xl font-semibold text-blue-800 text-left mb-0.5">Programming Languages</h3>
            <p className="text-gray-700 text-balance text-justify">Python, SQL, R, JavaScript</p>
          </div>

      {/* R/Bioconductor Packages */}
      <div>
            <h3 className="text-xl font-semibold text-blue-800">R/Bioconductor Packages</h3>
            <p className="text-gray-700">
              ggplot2, shiny, biomaRt, biostrings, biopython, limma, edgeR
            </p>
          </div>

      {/* Gene Prediction */}
      <div>
            <h3 className="text-xl font-semibold text-blue-800">Prokaryotic Gene Prediction and Annotation</h3>
            <p className="text-gray-700">
              ORF Finder, Glimmer, Prokka, Rast, Prodigal
            </p>
          </div>

      {/* Promoter Prediction */}
      <div>
            <h3 className="text-xl font-semibold text-blue-800">Promoter Prediction</h3>
            <p className="text-gray-700">
            Neural Network Promoter Prediction, Promoter finder
            </p>
          </div>

      {/* Eukaryotic Gene Prediction */}
      <div>
            <h3 className="text-xl font-semibold text-blue-800">Eukaryotic Gene Prediction</h3>
            <p className="text-gray-700">
              GENSCAN, HMMGene, Genomic BLAST, BLAT
            </p>
          </div>

      {/* Protein Prediction */}
      <div>
            <h3 className="text-xl font-semibold text-blue-800">Protein Prediction Tools</h3>
            <p className="text-gray-700">
              PSORTb, SWISS-PROT, MODELLER, PHYRE2
            </p>
          </div>

       {/* Genomic Databases */}
       <div>
            <h3 className="text-xl font-semibold text-blue-800">Genomic Databases and Tools</h3>
            <p className="text-gray-700">
              NCBI, Ensembl, UCSC Genome Browser, Galaxy, IGV, dbSNP, ClinVar, InterPro, ENCODE, TargetScan, and others.
            </p>
          </div>

         {/* Sequence Alignment */}
         <div>
            <h3 className="text-xl font-semibold text-blue-800">Sequence Alignment Tools</h3>
            <p className="text-gray-700">
              MUSCLE, Clustal Omega, MAFFT
            </p>
          </div>

         {/* NGS Analysis */}
         <div>
            <h3 className="text-xl font-semibold text-blue-800">Next-Generation Sequencing Analysis</h3>
            <p className="text-gray-700">
              Velvet, BWA, Bowtie2, HISAT, FreeBayes, DESeq2, BEDtools, SAMtools, GATK, SnpEff, ANNOVAR
            </p>
          </div>
          </div>
            
    </section>

    {/* To Showcase projects */}
    <main className="…">
    
      {/* ← Add it here: */}
      <ProjectsPreview />

    
    </main>



    {/* WHY CHOOSE ME section here */}
    
    <section className="w-full bg-blue-50 py-16 mt-12">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <p className="text-sm text-red-600 font-semibold">Selecting your partner</p>
    <h2 className="text-4xl font-bold text-gray-800 mb-12">Why Choose Me?</h2>

    <div className="grid md:grid-cols-3 gap-10">
      {/* Card 1 */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <img src={creative} alt="creative" className="mx-auto mb-4 w-24 h-24" />
        <h3 className="text-xl font-semibold text-gray-800">Creative</h3>
        <p className="text-gray-600 mt-2">I design and develop tools and interfaces...</p>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <img src={Quicklearner} alt="Quick Learner" className="mx-auto mb-4 w-24 h-24" />
        <h3 className="text-xl font-semibold text-gray-800">Quick Learner</h3>
        <p className="text-gray-600 mt-2">I quickly absorb new knowledge...</p>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <img src={Timemanagement} alt="Time Management" className="mx-auto mb-4 w-24 h-24" />
        <h3 className="text-xl font-semibold text-gray-800">Time Management</h3>
        <p className="text-gray-600 mt-2">I manage project timelines efficiently...</p>
      </div>
    </div>
  </div>
</section>



    </main>
  );
};

export default Home;
