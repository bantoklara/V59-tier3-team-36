export const fetchRoles = async () => {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';
    console.log('API_BASE_URL:', API_BASE_URL);
    const response = await fetch(`${API_BASE_URL}/api/roles`);

    if (!response.ok) {
        throw new Error('Failed to fetch roles');
    }

    return response.json();
}