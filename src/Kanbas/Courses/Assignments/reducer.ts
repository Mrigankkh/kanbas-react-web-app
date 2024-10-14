import { title } from "process";
import { assignments } from "../../Database";
import { createSlice } from "@reduxjs/toolkit";
const initState = {
    assignments: assignments,
}

const assignmentSlice = createSlice({
    name: "assignments",
    initialState: initState,
    reducers: {
        addAssignment: (state, {payload: assignment})=>
            {

                const newAssignment = {
                    _id: new Date().getTime().toString(),
                    title: assignment.title,
                    course: assignment.course,
                    description: assignment.description,
                    points: assignment.points,
                }
                state.assignments = [...state.assignments, newAssignment] as any;

            },
        deleteAssignment: (state, {payload: assignmentId})=>
            {
                state.assignments = state.assignments.filter(
                    (assignment: any) => assignment._id !== assignmentId);
            },
        updateAssignment: (state, {payload: assignment})=>
            {
                state.assignments = state.assignments.map((a: any)=>
                    assignment._id === a._id ? assignment : a
                ) as any;
            }

    }
})

export const {addAssignment, deleteAssignment, updateAssignment} = assignmentSlice.actions;
export default assignmentSlice.reducer;