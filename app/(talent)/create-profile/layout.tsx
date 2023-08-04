import { ReactNode } from 'react';
import { Minimal } from '@/components/layouts';
import ProfileStepper from '@/app/(talent)/create-profile/stepper';
import Container from '@/components/container';

interface AuthLayoutProps {
	children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
	return (
		<Minimal>
			<Container padding={0}>
				<ProfileStepper />
				<Container maxWidth={720} paddingY={0}>
					{children}
				</Container>
			</Container>
		</Minimal>
	);
}