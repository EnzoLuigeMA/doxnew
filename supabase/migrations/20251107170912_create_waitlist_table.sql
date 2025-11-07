/*
  # Create Waitlist Table

  1. New Tables
    - `waitlist`
      - `id` (uuid, primary key) - Identificador único do lead
      - `name` (text, required) - Nome completo do interessado
      - `email` (text, unique, required) - Email do interessado
      - `phone` (text, optional) - Telefone de contato
      - `interest_level` (text, optional) - Nível de interesse (baixo, médio, alto)
      - `referral_source` (text, optional) - Como conheceu o curso
      - `message` (text, optional) - Mensagem ou observações do interessado
      - `created_at` (timestamptz) - Data de cadastro na lista de espera
      - `updated_at` (timestamptz) - Data da última atualização
      - `notified` (boolean) - Se o lead já foi notificado sobre o lançamento

  2. Security
    - Enable RLS on `waitlist` table
    - Add policy for public insert (qualquer um pode se cadastrar)
    - Add policy for authenticated admins to view all leads
*/

-- Create waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text UNIQUE NOT NULL,
  phone text,
  interest_level text DEFAULT 'médio',
  referral_source text,
  message text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  notified boolean DEFAULT false
);

-- Enable RLS
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert into waitlist (public registration)
CREATE POLICY "Anyone can register for waitlist"
  ON waitlist
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy: Allow authenticated users to view all waitlist entries (for admin panel)
CREATE POLICY "Authenticated users can view waitlist"
  ON waitlist
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Allow authenticated users to update waitlist entries
CREATE POLICY "Authenticated users can update waitlist"
  ON waitlist
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create index for faster email lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);

-- Create index for created_at for sorting
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at DESC);

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to call the function
DROP TRIGGER IF EXISTS update_waitlist_updated_at ON waitlist;
CREATE TRIGGER update_waitlist_updated_at
  BEFORE UPDATE ON waitlist
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();