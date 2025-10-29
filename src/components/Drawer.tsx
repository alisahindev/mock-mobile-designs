import { HelpCircle, LogOut, Moon, Type, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Toggle } from '@/components/ui/toggle';
import { useAppState } from '@/contexts/AppStateProvider';

export function Drawer() {
  const { isDrawerOpen, closeDrawer, settings, updateSettings, userProfile, logout } = useAppState();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm('Çıkış yapmak istediğinize emin misiniz?')) {
      logout();
      closeDrawer();
    }
  };

  return (
    <Sheet open={isDrawerOpen} onOpenChange={open => !open && closeDrawer()}>
      <SheetContent side='left' className='w-[85vw] max-w-sm p-0'>
        <SheetHeader className='p-6 pb-4'>
          <div className='flex items-center justify-between'>
            <SheetTitle className='sr-only'>Profil Çekmecesi</SheetTitle>
            <SheetClose asChild>
              <Button variant='ghost' size='icon' className='rounded-full'>
                <X className='size-5' />
                <span className='sr-only'>Kapat</span>
              </Button>
            </SheetClose>
          </div>
        </SheetHeader>

        <div className='flex flex-col'>
          {/* Öğrenci Bilgi Alanı */}
          <div className='flex items-center gap-3 px-6 pb-4'>
            <Avatar className='size-12'>
              <AvatarImage src={userProfile.avatarUrl} alt={userProfile.name} />
              <AvatarFallback>
                {userProfile.name
                  .split(' ')
                  .map(n => n[0])
                  .join('')
                  .toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className='flex flex-col'>
              <span className='font-semibold'>{userProfile.name}</span>
              {userProfile.classroom && <span className='text-sm text-muted-foreground'>{userProfile.classroom}</span>}
            </div>
          </div>

          {/* Okul Bağlam Alanı */}
          {(userProfile.school || userProfile.teacher || userProfile.classroom) && (
            <>
              <Separator />
              <div className='px-6 py-4 space-y-2'>
                {userProfile.school && (
                  <div className='text-sm'>
                    <span className='text-muted-foreground'>Okul: </span>
                    <span>{userProfile.school}</span>
                  </div>
                )}
                {userProfile.teacher && (
                  <div className='text-sm'>
                    <span className='text-muted-foreground'>Öğretmen: </span>
                    <span>{userProfile.teacher}</span>
                  </div>
                )}
                {userProfile.classroom && (
                  <div className='text-sm'>
                    <span className='text-muted-foreground'>Sınıf: </span>
                    <span>{userProfile.classroom}</span>
                  </div>
                )}
              </div>
            </>
          )}

          {/* Ayarlar Bölümü */}
          <Separator />
          <div className='px-6 py-4'>
            <h2 className='mb-4 font-semibold'>Ayarlar</h2>
            <div className='space-y-2'>
              {/* Metin Boyutu Ayarı */}
              <button
                onClick={() => {
                  // TODO: Metin boyutu modalını aç
                  console.log('Metin boyutu ayarı');
                }}
                className='flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm hover:bg-accent'
              >
                <div className='flex items-center gap-2'>
                  <Type className='size-4' />
                  <span>Metin Boyutu</span>
                </div>
                <span className='text-muted-foreground'>›</span>
              </button>

              {/* Karanlık Mod Ayarı */}
              <div className='flex items-center justify-between rounded-md px-3 py-2'>
                <div className='flex items-center gap-2'>
                  <Moon className='size-4' />
                  <span>Karanlık Mod</span>
                </div>
                <Toggle
                  pressed={settings.darkMode}
                  onPressedChange={pressed => updateSettings({ darkMode: pressed })}
                  aria-label='Karanlık modu aç/kapat'
                />
              </div>

              {/* Yardım */}
              <button
                onClick={() => {
                  // TODO: Yardım ekranını aç
                  console.log('Yardım');
                  closeDrawer();
                }}
                className='flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm hover:bg-accent'
              >
                <HelpCircle className='size-4' />
                <span>Yardım</span>
              </button>
            </div>
          </div>

          {/* Çıkış */}
          <Separator />
          <div className='px-6 py-4'>
            <button
              onClick={handleLogout}
              className='flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-destructive hover:bg-destructive/10'
            >
              <LogOut className='size-4' />
              <span>Çıkış</span>
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
