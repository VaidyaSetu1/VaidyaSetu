import { useState, useContext } from 'react';
import AuthenticationContext from '../context/AuthenticationContext';
import { useNavigate } from 'react-router-dom'; // corrected import

export default function SignUpPage() {
  const [sendingOtp,setSendingOtp] = useState(false);
  const [isOtpSent,setIsOtpSent] = useState(false);
  const [email,setEmail] = useState('');

  const handleForm = async (e)=> {

  }
  
  return (
    <div className="flex flex-col items-center h-[67vh] bg-[#14B8A6] bg-gradient-to-b from-gray-900 to-[#14b8a6]">
      <div className="border-8 border-gray-900 rounded-3xl overflow-hidden bg-gradient-to-b from-[#8af2e7] to-white shadow-xl w-full max-w-md">
        <div className="h-full to-black overflow-auto p-6">
          {/* Logo and branding  */}
          <div className="flex justify-center mb-10 mt-8">
              <div className="flex items-center">
                <div className="bg-teal-500 text-black p-3 rounded-xl shadow-lg shadow-teal-500/20">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 2h4a2 2 0 0 1 2 2v4M22 16v4a2 2 0 0 1-2 2h-4M6 22H2a2 2 0 0 1-2-2v-4M2 8V4a2 2 0 0 1 2-2h4" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="12" y1="5" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
                <span className="text-2xl font-bold ml-2 text-black" style={{fontFamily: "'Montserrat', sans-serif"}}>VaidyaSetu</span>
              </div>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 text-[#14B8A6]" style={{fontFamily: "'Playfair Display', serif"}}>Sign Up</h1>
          </div>

          <div className="space-y-5">
          <div>
              <label className="block text-sm text-black-300 font-medium  mb-2" style={{fontFamily: "'Poppins', sans-serif"}}>Email Address</label>
              <div className="relative">
                
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-12 pr-3 py-4 bg-[#14B8A6] border border-gray-700 rounded-xl shadow-sm focus:ring-teal-500 focus:border-teal-500 text-white"
                  placeholder="Enter your email"
                  style={{fontFamily: "'Inter', sans-serif"}}
                />
              </div>
          </div>
          </div>

          <button className="my-4 w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-xl shadow-lg text-black bg-teal-500 hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-teal-500 shadow-teal-500/30"
                onClick={handleForm}
                disabled = {sendingOtp}>
                {sendingOtp ? "Sending" : "Send OTP"} 
          </button>


          
        </div>
      </div>
    </div>
  )

  
}
