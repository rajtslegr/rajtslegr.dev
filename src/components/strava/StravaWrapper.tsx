import Strava from '@/components/strava/Strava';
import type { Activity } from '@/types/entities';

interface StravaWrapperProps {
  data?: Activity[];
}

export default function StravaWrapper({ data }: StravaWrapperProps) {
  return <Strava data={data} />;
}
