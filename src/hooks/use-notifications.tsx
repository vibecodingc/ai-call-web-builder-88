
import { useState, useEffect, createContext, useContext } from 'react';
import { Notification } from '@/lib/forum-types';
import { useToast } from '@/hooks/use-toast';

// Mock initial notifications
const initialNotifications: Notification[] = [
  {
    id: 'notif-1',
    userId: 'user-1',
    type: 'reply',
    read: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
    actionUserId: 'user-2',
    actionUser: {
      id: 'user-2',
      name: 'Jamie Smith',
      username: 'jamiesmith',
      avatarUrl: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=80&q=80',
      joinDate: new Date(2024, 1, 15),
      postCount: 120
    },
    contentId: 'thread-1',
    contentType: 'thread',
    message: 'replied to your thread',
    link: '/thread/thread-1'
  },
  {
    id: 'notif-2',
    userId: 'user-1',
    type: 'like',
    read: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 10), // 10 minutes ago
    actionUserId: 'user-3',
    actionUser: {
      id: 'user-3',
      name: 'Alex Morgan',
      username: 'alexmorgan',
      avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80',
      joinDate: new Date(2023, 10, 5),
      postCount: 85
    },
    contentId: 'thread-2',
    contentType: 'thread',
    message: 'liked your thread',
    link: '/thread/thread-2'
  },
  {
    id: 'notif-3',
    userId: 'user-1',
    type: 'mention',
    read: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
    actionUserId: 'user-4',
    actionUser: {
      id: 'user-4',
      name: 'Riley Johnson',
      username: 'rileyjohnson',
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80',
      joinDate: new Date(2024, 2, 20),
      postCount: 45
    },
    contentId: 'thread-3',
    contentType: 'thread',
    message: 'mentioned you in a thread',
    link: '/thread/thread-3'
  }
];

interface NotificationsContextType {
  notifications: Notification[];
  unreadCount: number;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  removeNotification: (id: string) => void;
  addNotification: (notification: Omit<Notification, 'id' | 'createdAt'>) => void;
}

const NotificationsContext = createContext<NotificationsContextType | undefined>(undefined);

export const NotificationsProvider = ({ children }: { children: React.ReactNode }) => {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);
  const { toast } = useToast();
  
  // Calculate unread count
  const unreadCount = notifications.filter(notif => !notif.read).length;
  
  // Mark a notification as read
  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };
  
  // Mark all notifications as read
  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, read: true }))
    );
    
    toast({
      title: "All caught up!",
      description: "All notifications marked as read",
      duration: 2000
    });
  };
  
  // Remove a notification
  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };
  
  // Add a new notification
  const addNotification = (notification: Omit<Notification, 'id' | 'createdAt'>) => {
    const newNotification: Notification = {
      ...notification,
      id: `notif-${Date.now()}`,
      createdAt: new Date()
    };
    
    setNotifications(prev => [newNotification, ...prev]);
    
    // Show toast for the new notification
    if (notification.actionUser) {
      toast({
        title: `New ${notification.type}`,
        description: `${notification.actionUser.name} ${notification.message}`,
        duration: 3000,
        action: (
          <a href={notification.link} className="text-blue hover:text-blue-light">
            View
          </a>
        ),
      });
    }
  };
  
  // Save notifications to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem('forum-notifications', JSON.stringify(notifications));
    } catch (error) {
      console.error('Failed to save notifications to localStorage', error);
    }
  }, [notifications]);
  
  return (
    <NotificationsContext.Provider value={{
      notifications,
      unreadCount,
      markAsRead,
      markAllAsRead,
      removeNotification,
      addNotification
    }}>
      {children}
    </NotificationsContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationsContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationsProvider');
  }
  return context;
};
