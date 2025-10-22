import { useNavigate } from 'react-router-dom';
import AssignmentCard from '../components/AssignmentCard';
import Header from '../components/Header';
import { getAssignmentsByStatus } from '../data/assignments';

export default function Completed() {
  const navigate = useNavigate();
  const completedAssignments = getAssignmentsByStatus('completed');

  const handleAssignmentClick = (assignment: any) => {
    navigate(`/assignment/${assignment.id}`);
  };

  return (
    <div>
      <Header userName='Livia Vaccaro' avatarUrl='https://avatar.iran.liara.run/public/41' />

      {/* Completed Assignments Section */}
      <section className='px-6' aria-labelledby='completed-title'>
        <h1 id='completed-title' className='text-xl font-semibold mb-6'>
          Completed
        </h1>

        {completedAssignments.length === 0 ? (
          <div className='text-center py-12'>
            <div className='w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center'>
              <span className='text-2xl'>📚</span>
            </div>
            <h3 className='text-lg font-medium text-gray-900 mb-2'>Henüz tamamlanan görev yok</h3>
            <p className='text-gray-500'>Görevleri tamamladığınızda burada görünecek.</p>
          </div>
        ) : (
          <div className='space-y-3' role='list' aria-label='Tamamlanan görev listesi'>
            {completedAssignments.map(assignment => (
              <AssignmentCard
                key={assignment.id}
                assignment={assignment}
                onClick={() => handleAssignmentClick(assignment)}
                userProfile={{
                  age: 15, // Default age for demo
                  hasSocialAnxiety: false,
                  isPerfectionist: false,
                  isFromCompetitiveEnvironment: false,
                  isLowerPerforming: false,
                }}
              />
            ))}
          </div>
        )}
      </section>

      <div className='h-24' aria-hidden='true' />
    </div>
  );
}
