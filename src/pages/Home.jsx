import { useEffect, useState, useRef, lazy, Suspense, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Preloader from '../components/Preloader';
import Cursor from '../components/Cursor';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ChatLauncher from '../components/ChatLauncher';
import useLenis from '../hooks/useLenis';
import useScrollToGallery from '../hooks/useScrollToGallery';

const MarqueeBanner = lazy(() => import('../components/MarqueeBanner'));
const AboutSection = lazy(() => import('../components/AboutSection'));
const FeatureGrid = lazy(() => import('../components/FeatureGrid'));
const TechStack = lazy(() => import('../components/TechStack'));
const OrganizationLeadership = lazy(() => import('../components/OrganizationLeadership'));
const AchievementsSection = lazy(() => import('../components/AchievementsSection'));
const ProjectGallery = lazy(() => import('../components/ProjectGallery'));
const ProfileOverview = lazy(() => import('../components/ProfileOverview'));
const Footer = lazy(() => import('../components/Footer'));
const NoiseOverlay = lazy(() => import('../components/NoiseOverlay'));

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const galleryRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isScrollLocked, setIsScrollLocked] = useState(true);
  const [enableNoiseOverlay, setEnableNoiseOverlay] = useState(false);

  useLenis(isScrollLocked);
  useScrollToGallery(galleryRef, isLoading);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setEnableNoiseOverlay(isFinePointer && !reduceMotion);
    }
  }, []);

  useEffect(() => {
    const profileImg = new Image();
    profileImg.src = "/sindoro.jpg";
  }, []);

  useEffect(() => {
    if (isScrollLocked) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = '';
    }
  }, [isScrollLocked]);

  const handleOpenProject = useCallback((project) => {
    if (!project?.slug) return;
    navigate(`/projects/${project.slug}`, {
      state: { backgroundLocation: location },
    });
  }, [navigate, location]);

  return (
    <div className="bg-[#FAF9F6] text-black selection:bg-lime-400 selection:text-black relative">
      {isLoading && (
        <Preloader
          onComplete={() => {
            setIsLoading(false);
            setIsScrollLocked(false);
          }}
        />
      )}

      {enableNoiseOverlay && <Suspense fallback={null}><NoiseOverlay /></Suspense>}
      <ChatLauncher />
      <Cursor />
      <Navbar />
      
      <HeroSection isRevealed={true} />
      
      <Suspense fallback={null}><MarqueeBanner /></Suspense>
      <Suspense fallback={null}><AboutSection /></Suspense>
      <Suspense fallback={null}><FeatureGrid /></Suspense>
      <Suspense fallback={null}><TechStack /></Suspense>
      <Suspense fallback={null}><OrganizationLeadership /></Suspense>
      <Suspense fallback={null}><AchievementsSection /></Suspense>

      <div id="project-section" ref={galleryRef}>
        <Suspense fallback={<div className="h-screen bg-neutral-900" />}>
          <ProjectGallery onOpenProject={handleOpenProject} />
        </Suspense>
      </div>

      <Suspense fallback={null}><ProfileOverview /></Suspense>
      <Suspense fallback={null}><Footer /></Suspense>
    </div>
  );
}
