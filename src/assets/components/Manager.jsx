import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from "uuid";
import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {
  const ref = useRef();
  const [form, setform] = useState({ Site: "", Username: "", Password: "" })
  const [PasswordArray, setPasswordArray] = useState([]);
  const getPasswords = async () => {
    let req = await fetch("http://localhost:3000/")
    let Password = await req.json();
    if (Password) {
      setPasswordArray(Password)
      console.log(Password)
    }
  }


  useEffect(() => {
    getPasswords()

  }, [])

  const ShowPassword = () => {
    alert("show the password");
    if (ref.current.src.includes("src/assets/chama.svg")) {
      ref.current.src = "src/assets/password.svg";
    }
    else {
      ref.current.src = "src/assets/chama.svg";
    }
  }
const SavePassword = async () => {
  if (
    form.Site.length > 3 &&
    form.Username.length > 3 &&
    form.Password.length > 3
  ) {
    if (form.id) {
      await fetch("http://localhost:3000/", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: form.id })
      });
    }
    const newPassword = {
      ...form,
      id: form.id || uuidv4()
    };
    await fetch("http://localhost:3000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPassword)
    });
    await getPasswords();
    setform({
      Site: "",
      Username: "",
      Password: ""
    });
    toast.success("Password saved!", {
      position: "top-right",
      theme: "dark"
    });
  } else {
    toast.error("All fields must contain at least 4 characters!", {
      position: "top-right",
      theme: "dark"
    });
  }
};
  const DeletePassword = async (id) => {
    let c = confirm('really want to delete it?')
    if (c) {
      setPasswordArray(PasswordArray.filter(item => item.id !== id));
      await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) })
      //   localStorage.setItem("Password",JSON.stringify(PasswordArray.filter(item=>item.id!==id)))
    }
  }
  const EditPassword = async (id) => {
    setform({ ...PasswordArray.filter(i => i.id === id)[0], id: id })
    setPasswordArray(PasswordArray.filter(item => item.id !== id))

    console.log(form);
  }
  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }
  const copyText = (text) => {
    toast('Copied to Clipboard: ' + text, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",

    });
    navigator.clipboard.writeText(text)
  }


  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"

      />
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      <div className="flex p-6 flex-col justify-center items-center">
        <div className='font-bold font-sans text-3xl'>PassOp</div>
        <div className='text-ls'>Your Own Password Manager</div>
      </div>
      <div className="bg-purple-300 flex flex-col rounded-2xl gap-y-4 p-1.5 mycontainer">
        <div className="gap-x-2 flex">
          <input name='Site' value={form.Site} onChange={handlechange} placeholder='Enter Website URL' className=' placeholder:font-sans px-3 py-1 w-full rounded-2xl border-2 border-white' type="text" />
        </div>
        <div className="gap-x-2.5 flex">
          <input name='Username' value={form.Username} onChange={handlechange} placeholder='Enter Username' className='px-3 py-1 placeholder:font-sans w-full sm:w-3/4 rounded-2xl border-2 border-white' type="text" />
          <div className="relative w-full sm:w-1/4">
            <input name='Password' value={form.Password} onChange={handlechange} placeholder='Enter Password ' className='px-3 py-1 placeholder:font-sans  rounded-2xl border-2 border-white' type="text" />
            <span className='absolute left-40 top-1'><img className='w-7 hover:cursor-pointer hover:bg-amber-100' onClick={ShowPassword} ref={ref} src="src/assets/password.svg" alt="eye" /></span>
          </div>
        </div>
      </div>
      <div className="p-4 flex justify-center items-center mycontainer">
        <button onClick={SavePassword} className='flex items-center gap-x-2 bg-green-400 hover:bg-green-600 hover:cursor-pointer font-sans border-2 border-black rounded-full px-4 py-1' type="button"><lord-icon
          src="https://cdn.lordicon.com/efxgwrkc.json"
          trigger="hover"
        >
        </lord-icon>Save</button>
      </div>
      {PasswordArray === 0 && <p className='font-extrabold text-4xl text-blue-600'>no passoword item to show</p>}
      {PasswordArray != 0 && <div className='hello'>
        <div className="hidden sm:grid sm:grid-cols-6 mycontainer bg-purple-400 font-bold text-center py-1.5">
          <div className=" col-span-3 ">Site</div>
          <div className=' col-span-1'>Username</div>
          <div className=' col-span-1'>Password</div>
          <div className=' col-span-1'>Actions</div>

        </div>
        {PasswordArray.map((item) => {
          return (

            <div className="flex flex-col text-center mycontainer sm:grid sm:grid-cols-6 p-4 sm:p-2 bg-purple-100 rounded-xl sm:rounded-none border mb-3 sm:mb-0">

              <div className="flex justify-between sm:block sm:col-span-3 border-b sm:border-0 pb-1 sm:pb-0">
                <span className="font-bold sm:hidden text-purple-700">Site:</span>
                <div className='flex justify-center items-center gap-x-2 '> <span><a href={item.Site} target='_blank'>{item.Site}</a></span>
                  <div onClick={() => { copyText(item.Site) }}><lord-icon
                    src="https://cdn.lordicon.com/xuoapdes.json"
                    trigger="hover">
                  </lord-icon></div></div>
              </div>

              <div className="flex justify-between sm:block border-b sm:col-span-1 sm:border-0 py-1 sm:py-0">
                <span className="font-bold sm:hidden text-purple-700">Username:</span>
                <div className="flex justify-center items-center gap-x-2">
                  <span>{item.Username}</span>
                  <div onClick={() => { copyText(item.Username) }}><lord-icon
                    src="https://cdn.lordicon.com/xuoapdes.json"
                    trigger="hover">
                  </lord-icon></div>
                </div>
              </div>

              <div className="flex justify-between sm:block border-b sm:col-span-1 sm:border-0 py-1 sm:py-0">
                <span className="font-bold sm:hidden text-purple-700">Password:</span>
                <div className="flex justify-center items-center gap-x-2">
                  <span>{item.Password}</span>
                  <div onClick={() => { copyText(item.Password) }}><lord-icon
                    src="https://cdn.lordicon.com/xuoapdes.json"
                    trigger="hover">
                  </lord-icon></div>
                </div>
              </div>

              <div className="flex flex-row justify-between sm:block pt-1 sm:pt-0 sm:col-span-1">
                <span className="font-bold sm:hidden text-purple-700">Actions:</span>
                <div className='flex items-center justify-center gap-x-1.5'>
                  <div onClick={() => { DeletePassword(item.id) }}><lord-icon
                    src="https://cdn.lordicon.com/xyfswyxf.json"
                    trigger="hover">
                  </lord-icon></div>
                  <div onClick={() => { EditPassword(item.id) }}><lord-icon
                    src="https://cdn.lordicon.com/nwfpiryp.json"
                    trigger="hover">
                  </lord-icon></div>
                </div>
              </div>


            </div>)
        })}
      </div>}
    </>
  )
}

export default Manager