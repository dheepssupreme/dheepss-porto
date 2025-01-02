import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { Upload, Plus } from "lucide-react";
import Swal from 'sweetalert2';

const AddProjectCard = ({ onProjectAdded }) => {
  const [formData, setFormData] = useState({
    Title: "",
    Description: "",
    Github: "",
    Img: "",
    Link: "",
    TechStack: [],
    Features: []
  });

  const [techInput, setTechInput] = useState("");
  const [featureInput, setFeatureInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "projects"), formData);
      Swal.fire({
        icon: 'success',
        title: 'Project berhasil ditambahkan!',
        showConfirmButton: false,
        timer: 1500,
        background: '#030014',
        color: '#ffffff'
      });
      setFormData({
        Title: "",
        Description: "",
        Github: "",
        Img: "",
        Link: "",
        TechStack: [],
        Features: []
      });
      if (onProjectAdded) onProjectAdded();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Terjadi kesalahan saat menambahkan project',
        background: '#030014',
        color: '#ffffff'
      });
    }
  };

  const handleAddTech = () => {
    if (techInput.trim()) {
      setFormData(prev => ({
        ...prev,
        TechStack: [...prev.TechStack, techInput.trim()]
      }));
      setTechInput("");
    }
  };

  const handleAddFeature = () => {
    if (featureInput.trim()) {
      setFormData(prev => ({
        ...prev,
        Features: [...prev.Features, featureInput.trim()]
      }));
      setFeatureInput("");
    }
  };

  return (
    <div className="relative group bg-gradient-to-br from-blue-500/5 to-purple-500/5 p-1 rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <form onSubmit={handleSubmit} className="relative bg-[#030014]/50 backdrop-blur-xl p-6 rounded-lg space-y-4">
        <div className="flex items-center justify-center mb-6">
          <Plus className="w-6 h-6 text-blue-400 mr-2" />
          <h3 className="text-xl font-semibold text-blue-400">Add New Project</h3>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Project Title"
            value={formData.Title}
            onChange={(e) => setFormData({...formData, Title: e.target.value})}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-blue-500 focus:outline-none"
            required
          />

          <textarea
            placeholder="Project Description"
            value={formData.Description}
            onChange={(e) => setFormData({...formData, Description: e.target.value})}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-blue-500 focus:outline-none min-h-[100px]"
            required
          />

          <input
            type="url"
            placeholder="Image URL"
            value={formData.Img}
            onChange={(e) => setFormData({...formData, Img: e.target.value})}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-blue-500 focus:outline-none"
            required
          />

          <input
            type="url"
            placeholder="Github URL"
            value={formData.Github}
            onChange={(e) => setFormData({...formData, Github: e.target.value})}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-blue-500 focus:outline-none"
            required
          />

          <input
            type="url"
            placeholder="Live Demo URL"
            value={formData.Link}
            onChange={(e) => setFormData({...formData, Link: e.target.value})}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-blue-500 focus:outline-none"
            required
          />

          <div className="space-y-2">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Add Technology"
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-blue-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={handleAddTech}
                className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition-colors"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.TechStack.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Add Feature"
                value={featureInput}
                onChange={(e) => setFeatureInput(e.target.value)}
                className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-blue-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={handleAddFeature}
                className="px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 rounded-lg transition-colors"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.Features.map((feature, index) => (
                <span key={index} className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <Upload className="w-5 h-5" />
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AddProjectCard; 