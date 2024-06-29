import { BrowserRouter, Routes, Route} from "react-router-dom";
import React, { useState, useEffect } from 'react'
import Personal from "./pages/Personal";
import Work from "./pages/Work";
import WorkUpdate from "./pages/WorkUpdate";
import Gratitude from "./pages/Gratitude";
import Grateful from "./pages/Grateful";
import School from "./pages/School";
import Schooltasks from "./pages/Schooltasks";
import Categories from "./pages/Categories";
import Landing from "./pages/landing";
import PersonalNoteContainer from "./pages/Personal2";


function App() {
   const ddate = new Date()
   const colors = ["#F3DBCF", "#E5CICD", "#C9BBC8", "#B6B4C2", "#AAC9CE", "#E2CFF4", "#DAB1F0", "#B6C7EF", "#bc85a3", "#C56C86" ]
   const colorsRandom = Math.floor(Math.random() * colors.length)
   const color =  colors[colorsRandom]



// --------------------------------For personal Notes-----------------------------------------------
const personalNotes = localStorage.getItem('notesdata')
? JSON.parse(localStorage.getItem('notesdata')) : [];

   const [notes, setNotes]= useState(personalNotes)

   // ---------------------------to save personal to local storage--------
useEffect(() => {
   localStorage.setItem("notesdata", JSON.stringify(notes))
 }, [notes])



//  -----------------------------for work notes -------------------------------------------------
const workNotes = localStorage.getItem('workData')
? JSON.parse(localStorage.getItem('workData')) : [];

   const [workNote, setWorknotes]= useState(workNotes)

   // --------------------------to save worknotes to local storage---------------
   useEffect(() => {
      localStorage.setItem("workData", JSON.stringify(workNote))
    }, [workNote])
   



   //  -------------------------------------for gratitude notes-------------------------------------------
   const gratitudeNotes = localStorage.getItem('gratitudeData')
   ? JSON.parse(localStorage.getItem('gratitudeData')) : [];

   const [gratitudeNote, setGratitudenotes]= useState(gratitudeNotes)
   
   
   // ------------------------to save gratitude notes to local storage-----

   useEffect(() => {
      localStorage.setItem("gratitudeData", JSON.stringify(gratitudeNote))
    }, [gratitudeNote])
   


// -----------------------------school notes-------------------------------------------

const schoolNotes = localStorage.getItem('schoolData')
? JSON.parse(localStorage.getItem('schoolData')) : [];


   const [saveNotes, setSavenotes]= useState(schoolNotes)

 useEffect(() => {
   localStorage.setItem("schoolData", JSON.stringify(saveNotes))
 }, [saveNotes])




//  -------------------------------to update the state of the note with the input text-------------

 const [text, setText]= useState('')
 const handleTextChange = (event) =>{
 setText(event.target.value)
}
const [title, setTitle]= useState('')
 const handleTitleChange = (event) =>{
 setTitle(event.target.value)
}

const [add, setAdd]= useState('')
 const handleAddChange = (event) =>{
 setAdd(event.target.value)
}

// -------------------------------------------to save note onclick-------------------------

// ------------------ to save personal note-------------------------
const handleSavePersonal = () => {
   const newNote = {
      id: Math.floor(Math.random() * 1000000),
      color: color,
      text: text,
      editing: '/personal',
      date: ddate.toLocaleString()
  }
   const newNotes = [...notes, newNote]

  if(text.trim().length > 0){
  setNotes(newNotes)
  setText("")
  }
}
 
//-----------------------------to save work notes---------------------------
const handleSaveWork = () => {
   const newNote = {
      id: Math.floor(Math.random() * 1000000),
      color: color,
      title: title,
      add: add,
      text: text,
      editing: '/workUpdate',
      date: ddate.toLocaleString()
  }
   const newWorkNotes = [...workNote, newNote]

  if(text.trim().length > 0){
  setWorknotes(newWorkNotes)
  setText("")
  setTitle("")
  setAdd("")
  }
}
// ---------------------------- to save school notes------------------------------
const handleSaveSchool= () => {
   const newNote = {
      id: Math.floor(Math.random() * 1000000),
      color: color,
      text: text,
      editing: '/schoolTasks',
      date: ddate.toLocaleString()
  }
   const newSchoolNotes = [...saveNotes, newNote]

  if(text.trim().length > 0){
  setSavenotes(newSchoolNotes)
  setText("")
  }
}
// ----------------------to save gratitude notes---------------------------
const handleSaveGratitude = () => {
   const newNote = {
      id: Math.floor(Math.random() * 1000000),
      color: color,
      title: title,
      add: add,
      text: text,
      editing: '/grateful',
      date: ddate.toLocaleString()
  }
   const newGratitudeNotes = [...gratitudeNote, newNote]

  if(text.trim().length > 0){
  setGratitudenotes(newGratitudeNotes)
  setText("")
  setTitle("")
  setAdd("")
  console.log(newNote.id)
  }
}


// ------------------------------------------------edit notes------------------------ -

// ------------edit gratitude note ---------------
 const editGratitudeNote = (id) =>{  
    const selectNote  = gratitudeNote.find(note => note.id === id)
   setText(selectNote.text)
   setTitle(selectNote.title)
   setAdd(selectNote.add)
   delGratitude(selectNote.id) 
} 

// -------------------edit personal note--------------
const editPersonalNote = (id) =>{  
   const selectNote  = notes.find(note => note.id === id)
   setText(selectNote.text)
   setTitle(selectNote.title)
   setAdd(selectNote.add)
   del(selectNote.id)
} 

// -----------edit school note--------
const editSchoolNote = (id) =>{  
   const selectNote  = saveNotes.find(note => note.id === id)
   setText(selectNote.text)
   setTitle(selectNote.title)
   setAdd(selectNote.add)
   delSchool(selectNote.id)
} 
// -----------edit work note--------
const editWorkNote = (id) =>{  
   const selectNote  = workNote.find(note => note.id === id)
   setText(selectNote.text)
   setTitle(selectNote.title)
   setAdd(selectNote.add)
   delWork(selectNote.id)
} 

// -----------------------------------To delete a note-------------------------------------------
const del = (id) => {
 const remainingNotes = notes.filter((note) => note.id !== id)
 setNotes(remainingNotes)
}
const delWork = (id) => {
   const remainingNotes = workNote.filter((note) => note.id !== id)
   setWorknotes(remainingNotes)
  }
  const delSchool = (id) => {
   const remainingNotes = saveNotes.filter((note) => note.id !== id)
   setSavenotes(remainingNotes)
  }
  const delGratitude = (id) => {
   const remainingNotes = gratitudeNote.filter((note) => note.id !== id)
   setGratitudenotes(remainingNotes)
  }
      

 return(
  <BrowserRouter>
  <Routes>
     <Route>
     <Route path="/" element={<Landing/>}/>      
     <Route path="/categories" element={<Categories/>}/> 
     <Route path="/landing" element={<Landing/>}/>
     </Route>
     <Route>
     <Route path="/personalnote" element={<PersonalNoteContainer notes={notes} delet={del} click={editPersonalNote} />}/>
     <Route path="/personal" element={<Personal handleTextChanges={handleTextChange} datas={text} save={handleSavePersonal}/>}/>
     <Route path="/work" element={<Work notes={workNote} delet={delWork} click={editWorkNote}/>}/>
     <Route path="/workUpdate" element={<WorkUpdate handleTextChanges={handleTextChange} handleTitleChanges={handleTitleChange} handleAddChanges={handleAddChange} datas={text} title={title} add={add} save={handleSaveWork}/>}/>
     <Route path="/school" element={<School notes={saveNotes} delet={delSchool} click={editSchoolNote}/>}/>
     <Route path="/schoolTasks" element={<Schooltasks handleTextChanges={handleTextChange} datas={text} save={handleSaveSchool}/>}/>
     <Route path="/gratitude" element={<Gratitude notes={gratitudeNote} delet={delGratitude} click={editGratitudeNote}/>}/>
     <Route path="/grateful" element={<Grateful handleTextChanges={handleTextChange} handleTitleChanges={handleTitleChange} handleAddChanges={handleAddChange} data={text} title={title} add={add} save={handleSaveGratitude}/>}/>


     </Route>
  </Routes>
</BrowserRouter>
 )
}



 export default App;  
