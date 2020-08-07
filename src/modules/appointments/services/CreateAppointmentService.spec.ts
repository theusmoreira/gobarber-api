import AppError from '@shared/errors/AppError';
import FakeAppointmentRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentRepository = new FakeAppointmentRepository();
    const createAppointmentService = new CreateAppointmentService(
      fakeAppointmentRepository,
    );

    const appointment = await createAppointmentService.execute({
      date: new Date(),
      provider_id: '1234',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('1234');
  });

  it('should not be able to create two appointments on the same time', async () => {
    const fakeAppointmentRepository = new FakeAppointmentRepository();
    const createAppointmentService = new CreateAppointmentService(
      fakeAppointmentRepository,
    );

    const appointmentDate = new Date(2020, 8, 7, 8);

    await createAppointmentService.execute({
      date: appointmentDate,
      provider_id: '1234',
    });

    expect(
      createAppointmentService.execute({
        date: appointmentDate,
        provider_id: '1234',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
