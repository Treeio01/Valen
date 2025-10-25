<?php

namespace App\Filament\Resources;

use App\Filament\Resources\DeveloperResource\Pages;
use App\Filament\Resources\DeveloperResource\RelationManagers\ReportsRelationManager;
use App\Models\Developer;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class DeveloperResource extends Resource
{
    protected static ?string $model = Developer::class;

    protected static ?string $navigationIcon = 'heroicon-o-user-group';
    protected static ?string $navigationGroup = 'Admin';
    protected static ?int $navigationSort = 1;
    protected static ?string $modelLabel = 'Developer';
    protected static ?string $pluralModelLabel = 'Developers';
    protected static ?string $recordTitleAttribute = 'nickname';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('nickname')
                    ->label('Nickname')
                    ->required()
                    ->maxLength(255)
                    ->unique(table: Developer::class, column: 'nickname', ignoreRecord: true),
                Forms\Components\Textarea::make('ai_desc')
                    ->label('AI Description')
                    ->rows(6)
                    ->nullable()
                    ->columnSpanFull(),
            ])->columns(2);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('nickname')
                    ->label('Nickname')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('ai_desc')
                    ->label('AI Description')
                    ->limit(60)
                    ->toggleable()
                    ->wrap(),
                Tables\Columns\TextColumn::make('reports_count')
                    ->counts('reports')
                    ->label('Reports')
                    ->sortable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->since()
                    ->label('Created'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            ReportsRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListDevelopers::route('/'),
            'create' => Pages\CreateDeveloper::route('/create'),
            'edit' => Pages\EditDeveloper::route('/{record}/edit'),
        ];
    }
}
