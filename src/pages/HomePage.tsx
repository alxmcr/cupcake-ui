import { ComboBox } from '../components/03_organisms/ComboBox';

export default function HomePage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3">
      <h1 className="text-3xl font-bold text-pink-400 underline">Hello world!</h1>
      <ComboBox
        options={[
          {
            id: 'user-001',
            text: 'Victor Díaz',
            value: 'user-001',
          },
          {
            id: 'user-002',
            text: 'Jesús Millán',
            value: 'user-002',
          },
          {
            id: 'user-003',
            text: 'Max Mendez',
            value: 'user-003',
          },
          {
            id: 'user-004',
            text: 'Nicholas Yepes',
            value: 'user-004',
          },
          {
            id: 'user-005',
            text: 'David Gonzalez',
            value: 'user-005',
          },
          {
            id: 'a1b2c3d4',
            text: 'Alice Johnson',
            value: 'a1b2c3d4',
          },
          {
            id: 'e5f6g7h8',
            text: 'Carlos Martinez',
            value: 'e5f6g7h8',
          },
          {
            id: 'i9j0k1l2',
            text: 'Emma Smith',
            value: 'i9j0k1l2',
          },
          {
            id: 'm3n4o5p6',
            text: 'Liam Brown',
            value: 'm3n4o5p6',
          },
          {
            id: 'q7r8s9t0',
            text: 'Sofia Garcia',
            value: 'q7r8s9t0',
          },
        ]}
        statusLoadingOptions="SUCCESS"
      />
    </div>
  );
}
