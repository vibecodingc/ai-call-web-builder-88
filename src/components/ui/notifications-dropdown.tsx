
import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from '@/components/ui/dropdown-menu';
import { Bell, MessageSquare, Heart, AtSign, Check, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ButtonGradient } from '@/components/ui/button-gradient';
import { useNotifications } from '@/hooks/use-notifications';

interface NotificationsDropdownProps {
  className?: string;
}

export function NotificationsDropdown({ className }: NotificationsDropdownProps) {
  const { 
    notifications, 
    unreadCount, 
    markAsRead, 
    markAllAsRead,
    removeNotification
  } = useNotifications();
  
  // Get icon for notification type
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'reply':
        return <MessageSquare className="w-4 h-4 text-blue" />;
      case 'like':
        return <Heart className="w-4 h-4 text-red-500" />;
      case 'mention':
        return <AtSign className="w-4 h-4 text-green-400" />;
      default:
        return <Bell className="w-4 h-4 text-blue" />;
    }
  };

  const handleItemClick = (id: string, link: string) => {
    markAsRead(id);
    // Navigation will happen via Link component
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={`text-gray-300 hover:text-white relative group ${className}`}>
          <Bell className="w-5 h-5" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-blue rounded-full w-4 h-4 text-xs flex items-center justify-center group-hover:bg-blue-light transition-colors">
              {unreadCount}
            </span>
          )}
        </button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent className="w-80 bg-navy-light border border-white/10 text-white max-h-96 overflow-auto" align="end">
        <DropdownMenuLabel className="flex justify-between items-center">
          <span>Notifications</span>
          {unreadCount > 0 && (
            <button 
              onClick={markAllAsRead}
              className="text-xs text-blue hover:text-blue-light flex items-center"
            >
              <Check className="w-3 h-3 mr-1" />
              Mark all as read
            </button>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-white/10" />
        
        {notifications.length === 0 ? (
          <div className="py-6 text-center text-gray-400">
            <Bell className="w-8 h-8 mx-auto opacity-30 mb-2" />
            <p>No notifications yet</p>
          </div>
        ) : (
          <>
            {notifications.map((notification) => (
              <DropdownMenuItem key={notification.id} className="p-0 focus:bg-transparent">
                <div className={`w-full p-3 flex gap-3 hover:bg-white/5 ${!notification.read ? 'bg-blue/10' : ''}`}>
                  <div className="flex-shrink-0">
                    {notification.actionUser ? (
                      <img
                        src={notification.actionUser.avatarUrl}
                        alt={notification.actionUser.name}
                        className="w-8 h-8 rounded-full"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-blue/20 flex items-center justify-center">
                        {getNotificationIcon(notification.type)}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-grow">
                    <Link
                      to={notification.link || '#'}
                      className="block"
                      onClick={() => handleItemClick(notification.id, notification.link || '#')}
                    >
                      <div className="flex items-start justify-between">
                        <p className="text-sm">
                          <span className="font-medium">{notification.actionUser?.name}</span>{' '}
                          <span className="text-gray-400">{notification.message}</span>
                        </p>
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            removeNotification(notification.id);
                          }}
                          className="text-gray-500 hover:text-gray-300 p-1"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">
                        {formatDistanceToNow(notification.createdAt, { addSuffix: true })}
                      </p>
                    </Link>
                  </div>
                </div>
              </DropdownMenuItem>
            ))}
            
            <DropdownMenuSeparator className="bg-white/10" />
            <div className="p-3 text-center">
              <ButtonGradient variant="outline" size="sm" className="w-full">
                View All Notifications
              </ButtonGradient>
            </div>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
