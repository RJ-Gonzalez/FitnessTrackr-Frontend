import React, { useEffect, useState } from "react";
import { NavBar, CreateRoutineActivty } from ".";
import { getAllPublicRoutines } from "../api";
import { useNavigate } from "react-router-dom";
import DeleteRoutine from "./DeleteRoutine";
import UpdateRoutine from "./UpdateRoutine";



export default function AllRoutines({ routines, setRoutines }) {
  const navigate = useNavigate();
  useEffect(() => {
    getAllPublicRoutines().then((result) => {
      setRoutines(result);
    });
  }, []);

  return (
    <div>
      <NavBar />
      <h2>Routines and Activities</h2>
      <div id="container">
        {routines.map((routine, index) => {
          return (
            <div id="routinesContainer">
              <div key={`AllRoutines${index}`}>
                <h3>Posted By: {routine.creatorName.toUpperCase()}</h3>
                <DeleteRoutine routineId = {routine.id}/>
                <UpdateRoutine routineId = {routine.id}/>
                <h5>Goal:{routine.goal}</h5>
                <h5>Routine: {routine.name}</h5>
               
                {routine.activities.map((activity, indx) => {
                  return (
                    <div key={`RoutineActivitiesAllRoutines${indx}`}>
                      <h5>Activity{activity.name}</h5>
                      <h5>Duration:{activity.duration}</h5>
                      <h5>Count:{activity.count}</h5>
                      <h5>Description:{activity.description}</h5>
                      <CreateRoutineActivty routineId = {activity.routineId}/>
                    </div>
                  )
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}