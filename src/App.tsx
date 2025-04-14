
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { NotificationsProvider } from "@/hooks/use-notifications";

// Lazy loaded components with proper error handling
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ThreadPage = lazy(() => import("./pages/ThreadPage"));
const CreateThread = lazy(() => import("./pages/CreateThread"));
const BookmarksPage = lazy(() => import("./pages/BookmarksPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const CategoriesPage = lazy(() => import("./pages/CategoriesPage"));
const PopularPage = lazy(() => import("./pages/PopularPage"));

// Initialize QueryClient with optimized settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      gcTime: 5 * 60 * 1000, // 5 minutes (replaced cacheTime with gcTime)
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <NotificationsProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Suspense fallback={
              <div className="flex h-screen w-screen items-center justify-center bg-navy">
                <div className="text-blue animate-pulse text-xl font-bold">Loading...</div>
              </div>
            }>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/thread/:threadId" element={<ThreadPage />} />
                <Route path="/create" element={<CreateThread />} />
                <Route path="/bookmarks" element={<BookmarksPage />} />
                <Route path="/profile/:username" element={<ProfilePage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/categories" element={<CategoriesPage />} />
                <Route path="/popular" element={<PopularPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </NotificationsProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
