import { Typography } from '@mui/material';
import { getCandidateProfile } from '@/app/(talent)/actions';
import TitleForm from '@/app/(talent)/create-profile/title/title-form';
import { notFound } from 'next/navigation';

export default async function CandidateTitle() {
	const candidate = await getCandidateProfile();

	if (!candidate) {
		notFound();
	}

	return (
		<>
			<Typography
				variant='h4'
				sx={{
					fontWeight: 700,
				}}
			>
				Tell us about yourself.
			</Typography>
			<TitleForm candidate={candidate} />
		</>
	);
}