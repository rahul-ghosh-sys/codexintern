import React from 'react'
import axios from "axios"
import { apply_intern } from '../../../env.js'
import toast, { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { LoaderCircle } from 'lucide-react';

function ApplyIntern() {
  const [inputData, setInputData] = React.useState({
    fullname: "",
    email: "",
    mobile: "",
    gender: "",
    domain: "",
    college: ""
  })

  const [ loadingStatus, setLoadingStatus ] = React.useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoadingStatus(true)
    try {
      const data = await axios.post(apply_intern, inputData, { withCredentials: true })
      toast.success("Application submitted successfully!")
      setLoadingStatus(false)
      // console.log(data)
      setInputData({
        fullname: "",
        email: "",
        mobile: "",
        gender: "",
        domain: "",
        college: ""
      })
      window.location.href = "https://chat.whatsapp.com/ILR038VbtXNFFHRveo2bmQ"
    } catch (error) {
      setLoadingStatus(false)
      toast.error(error.response.data.message)
      // console.log(error.response.data.message)
    }
  }

  console.log(inputData)
  return (
    <div className="w-full h-screen flex flex-col justify-center max-w-lg mx-auto px-4 space-y-6 font-[sans-serif] text-[#333]">
      <Toaster />

      <a href="https://chat.whatsapp.com/ILR038VbtXNFFHRveo2bmQ" target='_blank'>
      <div className='flex justify-center items-center gap-x-2'>
        <h1 className='text-lg font-semibold text-blue-600'>Please join CODEXINTERN's internship group</h1>
        <PiWhatsappLogoDuotone size={35} color='green' className='cursor-pointer'/>
      </div>
      
      </a>
      <div>
        <label className="mb-2 text-sm block">Full Name</label>
        <input type='text' placeholder='Enter full name'
          className="px-4 py-1.5 text-sm rounded-md bg-white border border-gray-400 w-full outline-blue-500"
          onChange={(e) => setInputData((prev) => ({ ...prev, fullname: e.target.value }))} value={inputData.fullname}
        />
      </div>
      <div>
        <label className="mb-2 text-sm block">Email</label>
        <input type='text' placeholder='Enter email'
          className="px-4 py-1.5 text-sm rounded-md bg-white border border-gray-400 w-full outline-blue-500" onChange={(e) => setInputData((prev) => ({ ...prev, email: e.target.value }))} value={inputData.email} />
      </div>
      <div>
        <label className="mb-2 text-sm block">Gender</label>
        <select name="gender" id="" className="px-4 py-1.5 text-sm rounded-md bg-white border border-gray-400 w-full outline-blue-500" onChange={(e) => setInputData((prev) => ({ ...prev, gender: e.target.value }))} value={inputData.gender}>
          <option value="">Select your gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>
      </div>
      <div>
        <label className="mb-2 text-sm block">WhatsApp Number</label>
        <input type='text' placeholder='Enter your whatsapp number'
          className="px-4 py-1.5 text-sm rounded-md bg-white border border-gray-400 w-full outline-blue-500" onChange={(e) => setInputData((prev) => ({ ...prev, mobile: e.target.value }))} value={inputData.mobile} />
      </div>
      <div>
        <label className="mb-2 text-sm block">Internship Domain</label>
        <select name="gender" id="" className="px-4 py-1.5 text-sm rounded-md bg-white border border-gray-400 w-full outline-blue-500" onChange={(e) => setInputData((prev) => ({ ...prev, domain: e.target.value }))} value={inputData.domain}>
          <option value="">Select internship domain</option>
          <option value="Front-End Development">Front-End Development</option>
          <option value="Back-End Development">Back-End Development</option>
          <option value="Python Development">Python Development</option>
          <option value="AI/ML">AI/ML</option>
          <option value="C Language">C Language</option>
        </select>
      </div>
      <div>
        <label className="mb-2 text-sm block">College Name</label>
        <input type='text' placeholder='Enter your college name'
          className="px-4 py-1.5 text-sm rounded-md bg-white border border-gray-400 w-full outline-blue-500" onChange={(e) => setInputData((prev) => ({ ...prev, college: e.target.value }))} value={inputData.college} />
      </div>


      <div className="font-[sans-serif] space-x-4 space-y-4 text-center">
        <button type="button"
          className="px-5 py-2 rounded-lg text-sm tracking-wider font-medium border border-black outline-none bg-transparent hover:bg-black text-black hover:text-white transition-all duration-300" onClick={handleSubmit} disabled={loadingStatus}>
            {
              loadingStatus ? <LoaderCircle className='animate-spin'/> : "Apply"
            }
          </button>
      </div>
      <div class="space-x-6 space-y-4 text-center m-4">
        <Link to={"https://www.linkedin.com/company/codexintern/"}>
          <button type="button"
            class="w-10 h-10 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5] active:bg-[#0077b5]">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" fill="#fff" viewBox="0 0 24 24">
              <path
                d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                data-original="#0077b5" />
            </svg>
          </button></Link>

        <Link to={"https://www.youtube.com/@codexintern-p9c"}>
          <button type="button"
            class="w-10 h-10 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#f61c0d] hover:bg-[#f61d0de9] active:bg-[#f61c0d]">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" fill="#fff" viewBox="0 0 461.001 461.001">
              <path
                d="M365.257 67.393H95.744C42.866 67.393 0 110.259 0 163.137v134.728c0 52.878 42.866 95.744 95.744 95.744h269.513c52.878 0 95.744-42.866 95.744-95.744V163.137c0-52.878-42.866-95.744-95.744-95.744zm-64.751 169.663-126.06 60.123c-3.359 1.602-7.239-.847-7.239-4.568V168.607c0-3.774 3.982-6.22 7.348-4.514l126.06 63.881c3.748 1.899 3.683 7.274-.109 9.082z"
                data-original="#f61c0d" />
            </svg>
          </button></Link>

        <Link to={"https://chat.whatsapp.com/ILR038VbtXNFFHRveo2bmQ"}>
          <button type="button"
            class="w-10 h-10 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#4caf50] hover:bg-[#4caf10] active:bg-[#4caf50]">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" fill="#fff" viewBox="0 0 512 512">
              <path fill="#fff"
                d="M256.064 0h-.128C114.784 0 0 114.816 0 256c0 56 18.048 107.904 48.736 150.048l-31.904 95.104 98.4-31.456C155.712 496.512 204 512 256.064 512 397.216 512 512 397.152 512 256S397.216 0 256.064 0z"
                data-original="#4caf50" />
              <path fill="#4caf50"
                d="M405.024 361.504c-6.176 17.44-30.688 31.904-50.24 36.128-13.376 2.848-30.848 5.12-89.664-19.264-75.232-31.168-123.68-107.616-127.456-112.576-3.616-4.96-30.4-40.48-30.4-77.216s18.656-54.624 26.176-62.304c6.176-6.304 16.384-9.184 26.176-9.184 3.168 0 6.016.16 8.576.288 7.52.32 11.296.768 16.256 12.64 6.176 14.88 21.216 51.616 23.008 55.392 1.824 3.776 3.648 8.896 1.088 13.856-2.4 5.12-4.512 7.392-8.288 11.744-3.776 4.352-7.36 7.68-11.136 12.352-3.456 4.064-7.36 8.416-3.008 15.936 4.352 7.36 19.392 31.904 41.536 51.616 28.576 25.44 51.744 33.568 60.032 37.024 6.176 2.56 13.536 1.952 18.048-2.848 5.728-6.176 12.8-16.416 20-26.496 5.12-7.232 11.584-8.128 18.368-5.568 6.912 2.4 43.488 20.48 51.008 24.224 7.52 3.776 12.48 5.568 14.304 8.736 1.792 3.168 1.792 18.048-4.384 35.52z"
                data-original="#fafafa" />
            </svg>
          </button></Link>

      </div>
    </div>
  )
}

export default ApplyIntern
