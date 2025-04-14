
import { useEffect } from 'react';
import { useNotifications } from './use-notifications';

// Only use the notification types that are allowed in the Notification type
const mockNotificationTypes = ['like', 'reply', 'mention'] as const;
const mockUsers = [
  {
    id: 'user-2',
    name: 'Jamie Smith',
    username: 'jamiesmith',
    avatarUrl: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=80&q=80',
    joinDate: new Date(2024, 1, 15),
    postCount: 120
  },
  {
    id: 'user-3',
    name: 'Alex Morgan',
    username: 'alexmorgan',
    avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80',
    joinDate: new Date(2023, 10, 5),
    postCount: 85
  }
];

export function useNotificationService() {
  const { addNotification } = useNotifications();

  useEffect(() => {
    const generateRandomNotification = () => {
      const type = mockNotificationTypes[Math.floor(Math.random() * mockNotificationTypes.length)];
      const user = mockUsers[Math.floor(Math.random() * mockUsers.length)];
      const threadId = `thread-${Date.now()}`;

      let message = '';
      switch (type) {
        case 'like':
          message = 'liked your thread';
          break;
        case 'reply':
          message = 'replied to your thread';
          break;
        case 'mention':
          message = 'mentioned you in a thread';
          break;
      }

      addNotification({
        type,
        read: false,
        userId: 'user-1',
        actionUserId: user.id,
        actionUser: user,
        contentId: threadId,
        contentType: 'thread',
        message,
        link: `/thread/${threadId}`
      });
    };

    // Generate notification every 10 seconds
    const interval = setInterval(generateRandomNotification, 10000);

    return () => clearInterval(interval);
  }, [addNotification]);
}
