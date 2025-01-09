import { Session } from 'next-auth'

export interface HeaderProps {
  session: Session | null
}
