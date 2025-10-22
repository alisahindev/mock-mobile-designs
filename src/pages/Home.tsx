import { useNavigate } from 'react-router-dom';
import AssignmentCard from '../components/AssignmentCard';
import Header from '../components/Header';
import { mockAssignments } from '../data/assignments';

export default function Home() {
  const navigate = useNavigate();
  const activeAssignments = mockAssignments.filter(a => a.status !== 'completed').slice(0, 3);

  return (
    <div>
      <Header userName='Livia Vaccaro' avatarUrl='https://avatars.githubusercontent.com/u/123456789?v=4' />

      {/* Today's Assignments Section */}
      <section className='px-6 mb-6' aria-labelledby='assignments-title'>
        <div className='space-y-3' role='list' aria-label='Görev listesi'>
          {activeAssignments.map(assignment => (
            <AssignmentCard
              key={assignment.id}
              assignment={assignment}
              onClick={() => navigate(`/assignment/${assignment.id}`)}
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
      </section>

      <div className='h-24' aria-hidden='true' />
    </div>
  );
}
