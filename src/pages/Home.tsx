import { Book, Briefcase, Plus, UserRound } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AssignmentCard from '../components/AssignmentCard';
import Header from '../components/Header';
import ProjectMiniCard from '../components/ProjectMiniCard';
import TaskRow from '../components/TaskRow';
import TodayTaskCard from '../components/TodayTaskCard';
import { mockAssignments } from '../data/assignments';

export default function Home() {
  const navigate = useNavigate();
  const activeAssignments = mockAssignments.filter(a => a.status !== 'completed').slice(0, 3);

  return (
    <div>
      <Header userName='Livia Vaccaro' avatarUrl='https://avatars.githubusercontent.com/u/123456789?v=4' />
      <TodayTaskCard progressPercent={85} />

      {/* Today's Assignments Section */}
      <section className='px-6 mb-6' aria-labelledby='assignments-title'>
        <div className='flex items-center gap-2 mb-3'>
          <h2 id='assignments-title' className='text-lg font-semibold text-foreground'>
            Bugünün Görevleri
          </h2>
          <span className='w-4 h-4 rounded-full bg-[#EDE4FF]' aria-hidden='true' />
          <span className='text-xs text-[#5F33E1]' aria-hidden='true'>
            {activeAssignments.length}
          </span>
        </div>

        <div className='space-y-3' role='list' aria-label='Görev listesi'>
          {activeAssignments.map(assignment => (
            <AssignmentCard
              key={assignment.id}
              assignment={assignment}
              onClick={() => navigate(`/assignment/${assignment.id}`)}
            />
          ))}
        </div>
      </section>

      <section className='px-6' aria-labelledby='in-progress-title'>
        <div className='flex items-center gap-2 mb-3'>
          <h2 id='in-progress-title' className='text-lg font-semibold text-foreground'>
            In Progress
          </h2>
          <span className='w-4 h-4 rounded-full' style={{ backgroundColor: '#EDE4FF' }} aria-hidden='true' />
          <span className='text-xs text-[#5F33E1]' aria-hidden='true'>
            6
          </span>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3' role='list'>
          <ProjectMiniCard
            category='Office Project'
            titleLine1='Grocery shopping app'
            titleLine2='design'
            backgroundColor='#E7F3FF'
            progressColor='#0087FF'
            progressPercent={66}
          />
          <ProjectMiniCard
            category='Personal Project'
            titleLine1='Uber Eats redesign'
            titleLine2='challange'
            backgroundColor='#FFE9E1'
            progressColor='#FF7D53'
            progressPercent={54}
          />
          <button
            onClick={() => navigate('/add-project')}
            className='bg-white rounded-[15px] shadow-[0px_4px_32px_0px_rgba(0,0,0,0.04)] p-4 border-2 border-dashed border-gray-300 hover:border-primary hover:bg-primary-soft transition-all duration-200 flex flex-col items-center justify-center gap-2 min-h-[120px]'
            aria-label='Yeni proje ekle'
          >
            <div className='w-8 h-8 bg-primary rounded-full flex items-center justify-center'>
              <Plus className='w-4 h-4 text-white' />
            </div>
            <span className='text-sm font-medium text-muted-foreground'>Add New Project</span>
          </button>
        </div>
      </section>

      <section className='px-6 mt-6 mb-2' aria-labelledby='task-groups-title'>
        <div className='flex items-center gap-2'>
          <h2 id='task-groups-title' className='text-lg font-semibold text-foreground'>
            Task Groups
          </h2>
          <span className='w-4 h-4 rounded-full' style={{ backgroundColor: '#EDE4FF' }} aria-hidden='true' />
          <span className='text-xs text-[#5F33E1]' aria-hidden='true'>
            4
          </span>
        </div>
      </section>

      <div className='px-6 space-y-3' role='list' aria-label='Görev grupları listesi'>
        <TaskRow
          title='Office Project'
          tasksText='23 Tasks'
          icon={<Briefcase className='w-4 h-4' />}
          iconBackground='#FFE4F2'
          progressPercent={70}
        />
        <TaskRow
          title='Personal Project'
          tasksText='30 Tasks'
          icon={<UserRound className='w-4 h-4' />}
          iconBackground='#EDE4FF'
          progressPercent={52}
        />
        <TaskRow
          title='Daily Study'
          tasksText='30 Tasks'
          icon={<Book className='w-4 h-4' />}
          iconBackground='#FFE6D4'
          progressPercent={87}
        />
        <TaskRow
          title='Daily Study'
          tasksText='3 Tasks'
          icon={<Book className='w-4 h-4' />}
          iconBackground='#FFF6D4'
          progressPercent={87}
        />
      </div>

      <div className='h-24' aria-hidden='true' />
    </div>
  );
}
