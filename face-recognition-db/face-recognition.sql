PGDMP  2    	                {           face-recognition    16.0    16.0     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16398    face-recognition    DATABASE     �   CREATE DATABASE "face-recognition" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
 "   DROP DATABASE "face-recognition";
                postgres    false            �            1259    16414    login    TABLE     z   CREATE TABLE public.login (
    id integer NOT NULL,
    hash character varying(100) NOT NULL,
    email text NOT NULL
);
    DROP TABLE public.login;
       public         heap    postgres    false            �            1259    16413    login_id_seq    SEQUENCE     �   CREATE SEQUENCE public.login_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.login_id_seq;
       public          postgres    false    218            �           0    0    login_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.login_id_seq OWNED BY public.login.id;
          public          postgres    false    217            �            1259    16400    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(100),
    email text NOT NULL,
    entries bigint DEFAULT 0,
    joined timestamp without time zone NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16399    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    216            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    215            !           2604    16417    login id    DEFAULT     d   ALTER TABLE ONLY public.login ALTER COLUMN id SET DEFAULT nextval('public.login_id_seq'::regclass);
 7   ALTER TABLE public.login ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217    218                       2604    16403    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            �          0    16414    login 
   TABLE DATA           0   COPY public.login (id, hash, email) FROM stdin;
    public          postgres    false    218          �          0    16400    users 
   TABLE DATA           A   COPY public.users (id, name, email, entries, joined) FROM stdin;
    public          postgres    false    216   k       �           0    0    login_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.login_id_seq', 8, true);
          public          postgres    false    217            �           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 18, true);
          public          postgres    false    215            '           2606    16423    login login_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.login
    ADD CONSTRAINT login_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.login DROP CONSTRAINT login_email_key;
       public            postgres    false    218            )           2606    16421    login login_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.login
    ADD CONSTRAINT login_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.login DROP CONSTRAINT login_pkey;
       public            postgres    false    218            #           2606    16410    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    216            %           2606    16408    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    216            �   Z  x�M��n�@  г~��a/pkk� � e���}q`pF�뛴!�}��6;>�q�n�.�So�a��%� /���V|�n�r�����0�:���`�ΦAՕ-�����[~�|S���g�0���t��a��Zg�p����av�ު�a��U'-�>f.�3��8,�hȊ�P���u^��I I쾙����� �;qս,]�"n]�"��b��G|u�%q2ЍLF���jC�~"�����믓V��tH��+����CI4
+���4�K��~�b�J�H� G�9���!S�ow�
�%����������F����tҨ��� ��wVo������M��~�v������      �   �   x�}��N�@��ݧ�du�w{E*
��9�a,�_�s
rD�f��4;3n��w8V�y��F��Ĉݙ��8d��	/`��/�b�
1a�����UD��H����|=��6_�c�2	���a�~|��6��Y�
���p_�a�yՆ�l|V������KOn��jv����B�DZ�ԺT+�}u�t�rZ���]M��z��@;	s{[���L1	>"~�H}     