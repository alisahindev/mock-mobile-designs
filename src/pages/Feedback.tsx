import { useAppState } from '../contexts/AppStateProvider'

export default function Feedback() {
  const { postConversation, setPostConversation } = useAppState()
  return (
    <section className="px-6" aria-labelledby="feedback-title">
      <h1 id="feedback-title" className="text-xl font-semibold">Feedback</h1>
      <p className="text-sm text-muted-foreground mt-2">Post-conversation durumuna göre Drawer erişimi.</p>
      <div className="mt-4">
        <label className="inline-flex items-center gap-2">
          <input
            type="checkbox"
            className="w-5 h-5"
            checked={postConversation}
            onChange={(e) => setPostConversation(e.target.checked)}
            aria-label="Post-conversation durumunu değiştir"
          />
          <span className="text-sm">Post-conversation</span>
        </label>
      </div>
    </section>
  )
}


