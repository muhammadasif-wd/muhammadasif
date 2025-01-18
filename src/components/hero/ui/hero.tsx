import AnimatedGridPattern from '@/components/ui/animated-grid-pattern';
import { cn } from '@/lib/utils';
import { ProfileCard } from './profile-card';
import { ProfileCardMobile } from './profile-card-mobile';
import { Title } from './title';

export default function Hero() {
  return (
    <section>
      <section className="relative flex h-[90vh] w-full items-center justify-center">
        <div className="container flex flex-col items-center lg:flex-row xl:gap-56">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center"></div>
          <Title />
          <AnimatedGridPattern
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            className={cn(
              '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
              'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12',
            )}
          />
          <ProfileCard />
          <ProfileCardMobile />
        </div>
      </section>
    </section>
  );
}
