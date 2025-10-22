import clsx from 'clsx';
import { ArrowLeft, BookOpen, Bot, Clock, MessageSquare, User } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HelpfulPhraseItem from '../components/HelpfulPhraseItem';
import {
  Accordion,
  AccordionContent,
  AccordionGroup,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/Accordion';
import Badge from '../components/ui/Badge';
import { getAssignmentById } from '../data/assignments';

export default function AssignmentDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const assignment = id ? getAssignmentById(id) : undefined;
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll listener for header animation
  useEffect(() => {
    let ticking = false;
    let lastScrollY = 0;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const imageHeight = window.innerHeight * 0.6; // 60vh image height
          const threshold = imageHeight * 0.85; // 85% of image height
          const scrollDelta = Math.abs(scrollY - lastScrollY);

          // Only update if scroll change is significant (prevents jittery behavior)
          if (scrollDelta > 5) {
            const shouldBeScrolled = scrollY > threshold;

            // Add hysteresis to prevent rapid state changes
            if (shouldBeScrolled && !isScrolled && scrollY > threshold + 20) {
              setIsScrolled(true);
            } else if (!shouldBeScrolled && isScrolled && scrollY < threshold - 20) {
              setIsScrolled(false);
            }

            lastScrollY = scrollY;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  if (!assignment) {
    return (
      <div className='px-6 py-8 text-center'>
        <h1 className='text-xl font-semibold text-foreground mb-2'>Görev Bulunamadı</h1>
        <p className='text-sm text-muted-foreground mb-6'>Aradığınız görev mevcut değil veya kaldırılmış olabilir.</p>
        <button
          onClick={() => navigate('/')}
          className='px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors'
        >
          Ana Sayfaya Dön
        </button>
      </div>
    );
  }

  const handleStartConversation = () => {
    if (assignment.status === 'completed') {
      // Navigate to replay page for completed assignments
      navigate('/replay', { state: { assignmentId: assignment.id } });
    } else {
      // Navigate to conversation page with assignment context
      navigate('/conversation', { state: { assignmentId: assignment.id } });
    }
  };

  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ctaRef.current) {
      const height = ctaRef.current.offsetHeight;
      document.documentElement.style.setProperty('--cta-height', `${height}px`);
    }
  }, [ctaRef]);

  return (
    <div className='min-h-screen relative'>
      {/* Hero Background Image */}
      <div className='fixed inset-0 z-0 h-[40vh]'>
        {!imageLoaded && (
          <div className='absolute inset-0 bg-linear-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse'>
            <div className='absolute inset-0 bg-linear-to-br from-blue-500/10 to-blue-500/10 animate-pulse' />
          </div>
        )}
        <img
          src={assignment.imageUrl}
          alt={`${assignment.title} senaryosu görseli`}
          className={`w-full h-full object-cover transition-all duration-1000 ${
            imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)}
        />
        <div className='absolute inset-0 bg-linear-to-b from-black/40 via-black/15 to-black/60' />
        <div className='absolute inset-0 bg-linear-to-r from-blue-500/20 via-transparent to-blue-500/20' />
      </div>

      {/* Header with Back Button */}
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-30 transition-all duration-500 ease-out',
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent',
        )}
      >
        <div className='px-6 py-4'>
          <div className='flex items-center justify-between'>
            <button
              onClick={() => navigate('/')}
              className={clsx(
                'flex items-center justify-center transition-all duration-300 min-h-[44px] min-w-[44px] -ml-2 px-4 py-3 rounded-2xl focus:outline-none focus:ring-2',
                isScrolled
                  ? 'text-foreground hover:text-primary bg-gray-100 hover:bg-gray-200 focus:ring-primary/20'
                  : 'text-white hover:text-white/80 bg-black/20 backdrop-blur-md hover:bg-black/30 focus:ring-white/20',
              )}
              aria-label='Görevlere geri dön'
            >
              <ArrowLeft className='w-5 h-5' aria-hidden='true' />
            </button>

            {/* Reserved space for title - always present to prevent layout shift */}
            <div className='flex-1 mx-4 min-h-[28px] flex items-center'>
              <AnimatePresence mode='wait'>
                {isScrolled && assignment && (
                  <motion.h1
                    key='header-title'
                    initial={{ opacity: 0, x: 20, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 20, scale: 0.95 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      delay: 0.05,
                    }}
                    className='text-lg font-bold text-foreground truncate w-full'
                  >
                    {assignment.title}
                  </motion.h1>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <div className='relative z-10 mt-[30vh]'>
        <div className='bg-white rounded-t-3xl shadow-2xl border-t border-gray-200/30 backdrop-blur-sm'>
          {/* Title Section */}
          <section className='px-6 pt-8 pb-6' aria-labelledby='assignment-title'>
            <AnimatePresence mode='wait'>
              {!isScrolled && (
                <motion.h1
                  key='content-title'
                  id='assignment-title'
                  initial={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.05,
                  }}
                  className='text-3xl font-bold text-foreground mb-6 leading-tight line-clamp-2'
                >
                  {assignment.title}
                </motion.h1>
              )}
            </AnimatePresence>

            {/* Metadata Row */}
            <div className='flex flex-wrap items-center gap-4 text-sm mb-6'>
              {/* Learning Objective */}
              <div className='flex items-center gap-3 text-muted-foreground bg-blue-50 rounded-2xl px-4 py-3 border border-blue-200 shadow-sm'>
                <BookOpen className='w-5 h-5 shrink-0 text-blue-600' aria-hidden='true' />
                <span className='font-medium'>{assignment.learningObjective}</span>
              </div>
            </div>

            <div className='flex items-center gap-3'>
              {/* Category Badge */}
              <Badge variant='secondary' size='sm'>
                {assignment.category}
              </Badge>

              {/* Duration Badge */}
              <Badge variant='default' size='sm' className='flex items-center gap-2'>
                <Clock className='w-4 h-4 shrink-0' aria-hidden='true' />
                <span>{assignment.duration} dakika</span>
              </Badge>
            </div>
          </section>

          {/* Accordion Section */}
          <section
            className='px-6'
            style={{
              paddingBottom: 'calc(var(--cta-height) + var(--bottom-nav-height))',
            }}
            aria-label='Görev detayları'
          >
            <AccordionGroup title='Görev Detayları' description='Senaryo, roller ve yararlı ifadeler'>
              <Accordion type='single' collapsible className='space-y-4'>
                {/* Setting Accordion */}
                <AccordionItem value='setting' variant='card' size='sm'>
                  <AccordionTrigger
                    icon={<BookOpen className='size-6 rounded-md bg-blue-100 text-blue-600 p-1' aria-hidden='true' />}
                  >
                    Senaryo
                  </AccordionTrigger>
                  <AccordionContent size='sm'>
                    <p className='text-foreground/90'>{assignment.detail.setting}</p>
                  </AccordionContent>
                </AccordionItem>

                {/* Your Role Accordion */}
                <AccordionItem value='student-role' variant='card' size='sm'>
                  <AccordionTrigger
                    icon={<User className='bg-amber-100 size-6 rounded-md text-amber-600 p-1' />}
                    description='Senin Rolün'
                  >
                    {assignment.detail.studentRole.name}
                  </AccordionTrigger>
                  <AccordionContent size='sm'>
                    <div className='space-y-3'>
                      <p className='text-foreground/90'>{assignment.detail.studentRole.description}</p>
                      <div>
                        <p className='text-foreground mb-2'>Hedefler:</p>
                        <ul className='space-y-2' role='list'>
                          {assignment.detail.studentRole.goals.map((goal, index) => (
                            <li key={index} className='flex items-start gap-2 text-foreground/90'>
                              <span className='text-green-600 mt-0.5 shrink-0' aria-hidden='true'>
                                ✓
                              </span>
                              <span>{goal}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* AI Role Accordion */}
                <AccordionItem value='ai-role' variant='card' size='sm'>
                  <AccordionTrigger
                    icon={<Bot className='size-6 rounded-md bg-pink-100 text-pink-600 p-1' aria-hidden='true' />}
                    description='AI Rolü'
                  >
                    {assignment.detail.aiRole.name}
                  </AccordionTrigger>
                  <AccordionContent size='sm'>
                    <p className='text-foreground/90'>{assignment.detail.aiRole.description}</p>
                  </AccordionContent>
                </AccordionItem>

                {/* Helpful Phrases Accordion */}
                <AccordionItem value='helpful-phrases' variant='card' size='sm' defaultValue='helpful-phrases'>
                  <AccordionTrigger
                    icon={
                      <MessageSquare className='size-6 rounded-md bg-green-100 text-green-600 p-1' aria-hidden='true' />
                    }
                  >
                    Yararlı İfadeler
                  </AccordionTrigger>
                  <AccordionContent size='sm'>
                    <div className='space-y-2'>
                      {assignment.detail.helpfulPhrases.map((phrase, index) => (
                        <HelpfulPhraseItem
                          key={phrase.id}
                          phrase={phrase}
                          showTooltipOnFirst={true}
                          isFirst={index === 0}
                        />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionGroup>
          </section>
        </div>
      </div>

      {/* CTA Button */}
      <div className='px-6 py-2 fixed bottom-(--bottom-nav-height) z-40 left-0 right-0' ref={ctaRef}>
        <button
          onClick={handleStartConversation}
          className={clsx(
            'w-full max-w-sm mx-auto block py-6 rounded-3xl font-bold text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 active:scale-95 focus:outline-none focus:ring-4 focus:ring-offset-4 min-h-[64px] text-xl relative overflow-hidden',
            assignment.status === 'in_progress'
              ? 'bg-linear-to-r from-green-500 via-green-600 to-green-500 hover:from-green-600 hover:via-green-700 hover:to-green-600 focus:ring-green-500/30'
              : 'bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-purple-600 hover:via-blue-600 hover:to-purple-600 focus:ring-blue-500/30',
          )}
          aria-label={
            assignment.status === 'completed'
              ? 'Konuşmayı tekrar izle'
              : assignment.status === 'in_progress'
              ? 'Konuşmaya devam et'
              : 'Konuşmayı başlat'
          }
        >
          {/* Shimmer Effect */}
          <div className='absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000' />
          <span className='relative z-10 flex items-center justify-center gap-2'>
            {assignment.status === 'completed'
              ? 'Tekrar İzle'
              : assignment.status === 'in_progress'
              ? 'Devam Et'
              : 'Başla'}
            <div className='w-2 h-2 bg-white/80 rounded-full animate-pulse' />
          </span>
        </button>
      </div>
    </div>
  );
}
