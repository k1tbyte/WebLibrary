using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace WebLibrary.Backend.Database.Entity;

public enum UserRole
{
    Blocked = -1,
    User = 0,
    Admin = 100
}

[Table("user")]
public sealed class User
{
    [Key]
    [Column("id")]
    public int Id { get; init; }

    [Column("email")]
    [MaxLength(128)]
    public required string Email { get; init; }

    [Column("password")]
    [MaxLength(128)]
    [JsonIgnore]
    public string PasswordHash { get; set; } = null!;

    [Column("name")] 
    [MaxLength(128)]
    public required string Name { get; set; }
    
    [Column("date_of_birth")] 
    public DateOnly? Birth { get; set; }

    [Column("role")] 
    public UserRole Role { get; set; } = UserRole.User;

    [Column("registered_at")] 
    [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
    public DateTime RegisteredAt { get; init; }
}