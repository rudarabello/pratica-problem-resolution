import { prisma } from '@/config';
import { conflictError } from '@/errors/conflict-error';

export async function verificationRegisterService(cpf: unknown) {
  const verify = await prisma.enrollment.findFirst({
    where: { cpf },
    select: {
      cpf: true,
    },
  });

  if (verify) {
    throw conflictError('ConflictError');
  }
}
