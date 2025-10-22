// Social Proof Utility Functions
// Based on research findings for age-appropriate messaging

export interface SocialProofConfig {
  userAge: number;
  completionRate: number;
  completedCount: number;
  totalClassSize: number;
}

export function getSocialProofMessage(config: SocialProofConfig): string {
  const { userAge, completionRate, completedCount, totalClassSize } = config;

  // Only show if ≥70% completion rate (research-based threshold)
  if (completionRate < 70) {
    return '';
  }

  // Age-appropriate messaging
  if (userAge >= 9 && userAge <= 12) {
    // Younger students - softer tone, emphasize routine building
    return 'Sınıf arkadaşlarının çoğu bu alıştırmayı tamamladı!';
  } else if (userAge >= 13 && userAge <= 18) {
    // Teenagers - emphasize community and collective progress
    return 'Sınıf arkadaşlarının çoğu bu alıştırmayı tamamladı!';
  } else {
    // Adults - neutral and informational
    return 'Sınıf arkadaşlarının çoğu bu alıştırmayı tamamladı!';
  }
}

export function shouldShowSocialProof(config: SocialProofConfig): boolean {
  const { completionRate } = config;

  // Critical: Only show when ≥70% completion rate
  // Never show when completion rate is low to avoid normalizing non-completion
  return completionRate >= 70;
}

export function getCompletionMessage(completedCount: number, totalClassSize: number): string {
  // Positive, non-comparative framing
  // Avoid phrases like "You're one of only X who haven't completed"
  return `${completedCount} sınıf arkadaşın tamamladı`;
}

// Risk mitigation strategies
export function isVulnerableStudent(userProfile: {
  hasSocialAnxiety?: boolean;
  isPerfectionist?: boolean;
  isFromCompetitiveEnvironment?: boolean;
  isLowerPerforming?: boolean;
}): boolean {
  return !!(
    userProfile.hasSocialAnxiety ||
    userProfile.isPerfectionist ||
    userProfile.isFromCompetitiveEnvironment ||
    userProfile.isLowerPerforming
  );
}

export function getMitigatedMessage(baseMessage: string, isVulnerable: boolean): string {
  if (isVulnerable) {
    // Softer tone for vulnerable students
    return baseMessage.replace('çoğu', 'bazıları');
  }
  return baseMessage;
}
