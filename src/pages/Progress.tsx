import Header from '../components/Header';
import ProgressMetricCard from '../components/ProgressMetricCard';
import { useProgressData } from '../hooks/useProgressData';

export default function Progress() {
  const { completedConversations } = useProgressData();

  return (
    <>
      <Header userName='Livia Vaccaro' avatarUrl='https://avatar.iran.liara.run/public/41' />
      <section className='px-6 space-y-4' aria-labelledby='progress-title'>
        <h1 id='progress-title' className='text-xl font-semibold mb-6'>
          Progress
        </h1>

        <ProgressMetricCard variant='speakingTime' isEmpty={completedConversations <= 2} />

        <ProgressMetricCard variant='speakingConfidence' isEmpty={completedConversations < 3} />

        <ProgressMetricCard variant='taskAchievement' isEmpty={completedConversations <= 2} />

        <div className='h-24' aria-hidden='true' />
      </section>
    </>
  );
}
