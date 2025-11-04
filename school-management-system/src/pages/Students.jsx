import { useState } from 'react';

function Students() {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ]);
  const [newStudent, setNewStudent] = useState({ name: '', email: '' });
  const [editingId, setEditingId] = useState(null);
  const [editStudent, setEditStudent] = useState({ name: '', email: '' });

  const addStudent = () => {
    if (newStudent.name && newStudent.email) {
      setStudents([...students, { ...newStudent, id: Date.now() }]);
      setNewStudent({ name: '', email: '' });
    }
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const startEdit = (student) => {
    setEditingId(student.id);
    setEditStudent({ name: student.name, email: student.email });
  };

  const saveEdit = () => {
    setStudents(students.map(student =>
      student.id === editingId ? { ...student, ...editStudent } : student
    ));
    setEditingId(null);
    setEditStudent({ name: '', email: '' });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditStudent({ name: '', email: '' });
  };

  return (
    <div>
      <h1>Students</h1>

      <h2>Add New Student</h2>
      <input
        type="text"
        placeholder="Name"
        value={newStudent.name}
        onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={newStudent.email}
        onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
      />
      <button onClick={addStudent}>Add Student</button>

      <h2>Student List</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            {editingId === student.id ? (
              <div>
                <input
                  type="text"
                  value={editStudent.name}
                  onChange={(e) => setEditStudent({ ...editStudent, name: e.target.value })}
                />
                <input
                  type="email"
                  value={editStudent.email}
                  onChange={(e) => setEditStudent({ ...editStudent, email: e.target.value })}
                />
                <button onClick={saveEdit}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
              </div>
            ) : (
              <div>
                {student.name} - {student.email}
                <button onClick={() => startEdit(student)}>Edit</button>
                <button onClick={() => deleteStudent(student.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Students;
